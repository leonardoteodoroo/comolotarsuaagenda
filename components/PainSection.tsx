import React from 'react';
import { Ghost, Wallet, Frown } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-3">
            Parece familiar?
          </h2>
          <h3 className="font-serif text-3xl md:text-5xl text-slate-900 font-bold leading-tight">
            A angústia de ser uma excelente profissional com a <span className="text-red-600 decoration-red-200 underline decoration-wavy underline-offset-4">agenda cheia de buracos.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-2xl transform -rotate-2 z-0"></div>
            <img
              src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/A_candid_smartphone_202601040417.webp?v=1767511155"
              alt="A candid smartphone - A angústia de ser uma excelente profissional com a agenda cheia de buracos"
              className="relative rounded-lg shadow-2xl z-10 w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Ghost className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">O "Cri Cri" do WhatsApp</h4>
                <p className="text-slate-600 leading-relaxed">
                  Você posta a foto perfeita, faz stories, gasta horas editando... e o único retorno é o <strong className="text-slate-800 font-bold">silêncio</strong>. Ou pior: alguém pergunta o preço e <strong className="text-slate-800 font-bold">some logo em seguida.</strong>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">A Conta Não Fecha</h4>
                <p className="text-slate-600 leading-relaxed">
                  Você vê manicures iniciantes com a agenda lotada cobrando barato, enquanto você, que investiu em cursos caros, fica <strong className="text-slate-800 font-bold">esperando o telefone tocar.</strong>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <Frown className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">O Medo de Aumentar o Preço</h4>
                <p className="text-slate-600 leading-relaxed">
                  Você sabe que seu trabalho vale mais, mas tem <strong className="text-slate-800 font-bold">pavor de cobrar o justo</strong> e as poucas clientes que você tem irem embora para a concorrência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};