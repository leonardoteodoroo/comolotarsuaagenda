import React from 'react';
import { CheckCircle2, Star, MonitorPlay, Infinity, BookOpen, Check, ArrowRight, ShieldCheck, Gift, Calendar, Instagram } from 'lucide-react';
import { Button } from './Button';

export const ProductDetails: React.FC = () => {
  // Data dinâmica para escassez
  const today = new Date().toLocaleDateString('pt-BR');

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            O que está incluso no seu <span className="text-brand-600">Passaporte para o Sucesso</span>
          </h2>
          <p className="text-lg text-slate-600">
            Você não está comprando apenas um curso. Você está levando um ecossistema completo de formação profissional.
          </p>
        </div>

        {/* Instructor Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-slate-100">
          <div className="md:w-1/3 relative min-h-[400px]">
            <img
              src="https://www.cursomanicure.com/wp-content/uploads/2024/04/faby-cardoso-instrutora-master-1.png"
              alt="Faby Cardoso"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 md:hidden">
              <div>
                <span className="text-yellow-400 font-bold tracking-wider text-xs uppercase mb-1 block">Instrutora Master</span>
                <h3 className="text-white font-serif font-bold text-2xl">Faby Cardoso</h3>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="hidden md:flex items-center gap-2 text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">
              <Star className="w-4 h-4 fill-current" />
              Quem vai te guiar
            </div>
            <h3 className="hidden md:block font-serif text-4xl font-bold text-slate-900 mb-6">Faby Cardoso</h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Conhecida como a "Rainha da Cutícula", Faby Cardoso transformou a vida de milhares de manicures. Ela saiu do zero e construiu um império, não por sorte, mas por método.
            </p>
            <p className="text-slate-900 font-medium text-lg mb-8 leading-relaxed border-l-4 border-brand-500 pl-4">
              "Eu vou pegar na sua mão e te ensinar exatamente o que eu faço hoje para ter clientes implorando por um horário na minha agenda."
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 bg-[#E1306C]/10 text-[#E1306C] rounded-full text-sm font-bold border border-[#E1306C]/20">
                <Instagram className="w-4 h-4" />
                1,2 Mi Seguidoras
              </span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold">Autoridade em Cutilagem</span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold">Expert em Marketing</span>
            </div>
          </div>
        </div>

        {/* Core Curriculum */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Marketing & Gestão */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-500">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
              <MonitorPlay className="w-6 h-6 text-brand-500" />
              Estratégias de Marketing e Gestão
            </h3>
            <ul className="space-y-4">
              <ListItem text="Estratégias Práticas: Técnicas simples para atrair clientes rapidamente." />
              <ListItem text="Agenda Cheia com Fila de Espera: Métodos testados para organizar sua rotina." />
              <ListItem text="Segredos para Fidelizar Clientes: Transforme clientes esporádicos em fiéis." />
              <ListItem text="Marketing Digital: Como usar redes sociais para divulgar e vender." />
              <ListItem text="Dicas de atendimento que encantam e criam conexões." />
            </ul>
          </div>

          {/* Técnicas */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900">
              <Star className="w-6 h-6 text-purple-500" />
              Técnicas Profissionais Completas
            </h3>
            <ul className="space-y-4">
              <ListItem text="Manicure e Pedicure (Cutilagem Fina e Esmaltação)." />
              <ListItem text="Aulas de Unhas de Gel no Molde e Fibra de Vidro." />
              <ListItem text="Unhas Decoradas: Tendências e passo a passo." />
              <ListItem text="Biossegurança e cuidados essenciais." />
              <ListItem text="Super Dicas e Tira-Dúvidas com suporte completo." />
            </ul>
          </div>
        </div>

        {/* Offers Section - Comparison */}
        <div id="ofertas" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
              Escolha o Melhor Plano Para Você
            </h3>
            <p className="text-slate-600 mt-4">
              Comece hoje mesmo a transformar sua carreira.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

            {/* OPTION 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 pb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Opção 1</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm text-slate-400 line-through">de R$ 199</span>
                  <span className="text-4xl font-extrabold text-slate-900">R$ 99</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">ou 12x de R$ 10,24</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <ListItemSmall text="Estratégias de Marketing" />
                <ListItemSmall text="Agenda Cheia com Fila de Espera" />
                <ListItemSmall text="Segredos para Fidelizar Clientes" />
                <ListItemSmall text="Marketing Digital para Manicures" />
                <ListItemSmall text="Dicas de Atendimento que Encantam" />
                <ListItemSmall text="Novo Certificado de Profissionalização" />
                <ListItemSmall text="Acesso Exclusivo à Comunidade" />
                <ListItemSmall text="Acesso Vitalício ao Curso" />

                {/* Made more visible as requested */}
                <li className="text-sm font-semibold text-green-700 bg-green-50 border border-green-100 p-3 rounded-lg mt-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>+ Aulas de manicure, pedicure, cutilagem e esmaltação.</span>
                </li>
              </ul>

              <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=0yoyrlew" className="mt-auto">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  QUERO ESSA OPÇÃO <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>

            {/* OPTION 2 - BEST CHOICE */}
            <div className="bg-slate-900 text-white border-2 border-yellow-400 rounded-3xl p-8 flex flex-col relative overflow-visible shadow-2xl transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-slate-900 font-black px-8 py-2 rounded-full text-sm uppercase tracking-wide shadow-lg whitespace-nowrap">
                Melhor Escolha: Opção 2
              </div>

              <div className="mb-6 pb-6 border-b border-slate-800 mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Curso Completo + Bônus</h3>
                <p className="text-brand-300 font-bold text-lg mb-6">
                  Você leva <span className="text-yellow-400">9 Cursos de Brinde</span>
                </p>

                {/* Snake Border Pricing Block */}
                <div className="relative overflow-hidden p-8 mb-6 rounded-2xl bg-slate-950 shadow-2xl group border border-slate-800/50">
                  <style>{`
                                @keyframes snake-top { 0% { left: -100%; } 50%, 100% { left: 100%; } }
                                @keyframes snake-right { 0% { top: -100%; } 50%, 100% { top: 100%; } }
                                @keyframes snake-bottom { 0% { right: -100%; } 50%, 100% { right: 100%; } }
                                @keyframes snake-left { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }
                            `}</style>

                  {/* Animated Borders - Slower (4s), Thinner (1px) and Transparent for Elegance */}
                  <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" style={{ animation: 'snake-top 4s linear infinite' }}></span>
                  <span className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-80" style={{ animation: 'snake-right 4s linear infinite', animationDelay: '1s' }}></span>
                  <span className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-yellow-400 to-transparent opacity-80" style={{ animation: 'snake-bottom 4s linear infinite', animationDelay: '2s' }}></span>
                  <span className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-transparent via-yellow-400 to-transparent opacity-80" style={{ animation: 'snake-left 4s linear infinite', animationDelay: '3s' }}></span>

                  {/* Pricing Content */}
                  <div className="flex flex-col items-center justify-center text-center relative z-10">
                    <span className="text-slate-400 text-sm md:text-base line-through mb-2 font-medium">de R$ 297 por</span>
                    <span className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tighter leading-none">
                      <span className="text-2xl md:text-3xl font-bold align-middle mr-2 text-slate-300">12x</span>
                      R$ 15,41
                    </span>
                    <span className="text-base md:text-lg text-yellow-400 font-bold bg-yellow-400/10 px-6 py-2 rounded-full border border-yellow-400/20 shadow-[0_0_15px_-5px_rgba(250,204,21,0.3)]">ou R$ 149,00 à vista</span>
                  </div>
                </div>

                {/* Scarcity */}
                <div className="flex items-center gap-2 text-red-300 text-sm font-semibold bg-red-900/20 p-2 rounded-lg border border-red-900/50 justify-center">
                  <Calendar className="w-4 h-4" />
                  <span>Oferta Válida até {today}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3 font-bold text-yellow-400 bg-yellow-400/10 p-3 rounded-lg">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Tudo o que tem na Opção 1</span>
                </li>

                <li className="pt-4">
                  <span className="font-bold block mb-4 text-white flex items-center gap-2">
                    <Gift className="w-5 h-5 text-brand-400" />
                    + 9 Cursos Exclusivos:
                  </span>
                  <div className="grid grid-cols-1 gap-3 pl-2">
                    <BonusItem text="Apostila Manicure Iniciante" />
                    <BonusItem text="Agenda Manicure Organizadora" />
                    <BonusItem text="Manual de Biossegurança" />
                    <BonusItem text="30 Frases para Divulgar" />
                    <BonusItem text="Como Montar Salão de Sucesso" />
                    <BonusItem text="Estratégias de Precificação" />
                    <BonusItem text="Guia Unhas de Gel no Molde" />
                    <BonusItem text="Guia Fibra de Vidro" />
                    <BonusItem text="Catálogo de Unhas Decoradas" />
                  </div>
                </li>
              </ul>

              <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=4a5h6otc" className="mt-auto">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                  QUERO A MELHOR OPÇÃO <ArrowRight className="w-6 h-6" />
                </button>
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Garantia de 7 dias ou seu dinheiro de volta
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-slate-700">
    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
    <span className="font-medium leading-relaxed">{text}</span>
  </li>
);

const ListItemSmall: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-slate-600 text-sm">
    <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
    <span className="font-medium leading-tight">{text}</span>
  </li>
);

const BonusItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 text-slate-300 text-sm">
    <BookOpen className="w-4 h-4 text-slate-500" />
    <span>{text}</span>
  </div>
);