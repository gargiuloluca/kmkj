import { useSyncExternalStore } from "react";

/** Per-device learner state (favourites, completed sheets, profile), kept in localStorage. */
export type AcademyState = {
  favorites: string[];
  completed: string[];
  profile: { name: string; level: "principiante" | "esperto" };
};

const KEY = "kmkj-academy-v1";
const empty: AcademyState = { favorites: [], completed: [], profile: { name: "", level: "principiante" } };

let state: AcademyState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...empty, ...JSON.parse(raw) };
  } catch {
    state = empty;
  }
}

function write(next: AcademyState) {
  state = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

const toggle = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

export const academy = {
  toggleFavorite: (slug: string) => write({ ...state, favorites: toggle(state.favorites, slug) }),
  toggleCompleted: (slug: string) => write({ ...state, completed: toggle(state.completed, slug) }),
  setProfile: (profile: Partial<AcademyState["profile"]>) => write({ ...state, profile: { ...state.profile, ...profile } }),
  reset: () => write(empty),
};

export function useAcademy(): AcademyState {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return state;
    },
    () => empty,
  );
}
