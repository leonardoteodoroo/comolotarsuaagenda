import React from 'react';
import { XCircle, DollarSign, Smartphone } from 'lucide-react';

export const AgitationSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-8">
          A Culpa não é sua.<br/>
          <span className="text-red-600">Você caiu na armadilha da "Blogueirinha".</span>
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Te disseram que para ter agenda cheia você precisa fazer dancinhas, postar 30 stories por dia e virar refém do algoritmo. <strong>Isso é mentira.</strong> Você é manicure, não criadora de conteúdo.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-red-600 flex items-center gap-2">
                O Botão Turbinar
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Feito para tirar dinheiro de amadores. Ele traz curtidas de pessoas que nunca vão sentar na sua cadeira. É <strong className="text-red-600 bg-red-50 px-1 rounded">queimar dinheiro.</strong>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-red-600">Promoção Desesperada</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fazer "pé e mão por R$ 30,00" só atrai cliente que não valoriza seu trabalho e reclama de tudo. Você <strong className="text-red-600 bg-red-50 px-1 rounded">paga para trabalhar.</strong>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <XCircle className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-red-600">Filtro de Curiosas</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Passar o dia respondendo direct de gente que só quer saber preço <strong className="text-red-600 bg-red-50 px-1 rounded">suga sua energia</strong> para atender bem quem realmente paga.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Existe um jeito mais inteligente.</h3>
            <p className="mb-0 text-slate-300 text-lg max-w-2xl">
              Imagine um sistema onde as clientes certas chegam até você, já sabendo o valor do seu trabalho, <span className="text-green-400 font-bold">prontas para agendar</span>, sem você precisar implorar pela atenção delas.
            </p>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-600 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};