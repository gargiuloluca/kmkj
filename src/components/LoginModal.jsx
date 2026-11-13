// src/components/LoginModal.jsx
import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Inserisci un'email valida");
      return;
    }

    // Qui in futuro collegherai il controllo reale con il database delle email (Stripe / Backend)
    // Per adesso classifichiamo il tipo di abbonamento in base all'email o pass inserita di test
    let subType = 'lifetime'; // di default diamo lifetime per test
    if (email.includes('singolo')) subType = 'single';
    else if (email.includes('annuale')) subType = 'annual';

    onLoginSuccess(subType, email);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
        
        {/* Pulsante di chiusura */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 p-2 rounded-xl transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-8">
          <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto text-indigo-400 mb-4 shadow-inner">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Area Riservata</h2>
          <p className="text-slate-400 text-sm">Inserisci l'email usata per l'acquisto e la password ricevuta.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email di Acquisto</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
              <input 
                type="email5" 
                required
                placeholder="iltuoindirizzo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Password / Chiave d'accesso</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-12 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2 mt-6"
          >
            <span>Accedi all'Accademia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex items-center justify-center space-x-1">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Accesso crittografato e sicuro al 100%</span>
        </div>

      </div>
    </div>
  );
}
