import React from 'react';
import { Button } from './Button';
import { Lock, ShieldCheck, CreditCard, ArrowRight, Shield } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse duration-[4000ms]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
          Você tem duas escolhas agora.
        </h2>

        <div className="text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-12 space-y-6 backdrop-blur-sm">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0">1</div>
            <p className="text-slate-300">
              Continuar fazendo "postagens aleatórias", torcendo para o algoritmo entregar, e sofrer todo mês para pagar as contas do salão.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center font-bold text-green-400 shrink-0">2</div>
            <p className="text-white font-medium">
              Pegar o atalho. Copiar o método da Faby Cardoso, aplicar as técnicas de venda e técnica de unhas, e ver sua agenda lotar em questão de semanas.
            </p>
          </div>
        </div>

        {/* Impactful Risk Reversal Section */}
        <div className="relative mb-12 group cursor-default">
          {/* Pulsing Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>

          {/* Content Container */}
          <div className="relative bg-slate-900/80 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">O Risco é 100% NOSSO</h3>
              <p className="text-slate-300 text-lg">
                Se você não gostar, não aprender ou achar que não é para você, <br className="hidden md:block" />
                <span className="text-green-400 font-bold underline decoration-green-500/50 underline-offset-4">devolvemos cada centavo</span> do seu dinheiro.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=4a5h6otc" className="w-full md:w-auto group">
            <div className="relative">
              <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-200 animate-pulse"></div>
              <button className="relative w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-extrabold text-xl md:text-2xl px-8 py-5 md:px-12 md:py-6 rounded-full shadow-xl shadow-green-900/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 whitespace-normal h-auto leading-tight">
                SIM! Quero Lotar Minha Agenda
                <ArrowRight className="w-6 h-6 flex-shrink-0" />
              </button>
            </div>
          </a>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full text-sm text-slate-400 mt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-white">Garantia Blindada de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-400" />
              <span>Pagamento Seguro (Hotmart)</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};