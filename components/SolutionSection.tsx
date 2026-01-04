import React from 'react';
import { Sparkles, MousePointerClick, TrendingUp } from 'lucide-react';
import { Button } from './Button';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              O Atalho (Decorado)
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Não tente reinventar a roda.<br/>
              <span className="text-green-600">Copie o que já funciona.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              O curso <strong>Manicure Agenda Lotada</strong> não é só mais um curso de unhas. É um <strong>plano de resgate da sua carreira</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              A Faby Cardoso já errou tudo o que tinha para errar. Agora, ela entrega o mapa pronto. Você não precisa ser expert em marketing, você só precisa seguir o passo a passo de quem tem <strong className="text-slate-900">fila de espera</strong>.
            </p>
            
            <div className="space-y-8">
              <FeatureItem 
                icon={<MousePointerClick className="w-6 h-6 text-white" />}
                title="Marketing Sem 'Migué'"
                description="Aprenda a fazer anúncios simples que trazem clientes do seu bairro direto para o seu WhatsApp."
              />
              <FeatureItem 
                icon={<Sparkles className="w-6 h-6 text-white" />}
                title="Técnica que Fideliza"
                description="Não adianta atrair se o serviço for ruim. Aprenda a cutilagem e esmaltação que fazem a cliente viciar em você."
              />
              <FeatureItem 
                icon={<TrendingUp className="w-6 h-6 text-white" />}
                title="Valorização Imediata"
                description="Como se posicionar para cobrar mais caro e a cliente ainda achar que está barato pela qualidade que você entrega."
              />
            </div>

            <div className="mt-12">
               <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=4a5h6otc">
                 <Button className="w-full md:w-auto px-10 bg-green-600 hover:bg-green-700 shadow-green-600/30">
                   Quero copiar esse método
                 </Button>
               </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
             <div className="absolute inset-0 bg-green-600 rounded-[2rem] transform rotate-6 opacity-20 transition-transform group-hover:rotate-12"></div>
             <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
               <img 
                 src="https://picsum.photos/id/175/800/1000" 
                 alt="Agenda Lotada Resultado" 
                 className="w-full h-auto object-cover opacity-90"
                 loading="lazy"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8">
                 <p className="text-white font-serif text-2xl font-bold mb-2">
                   "Minha renda <span className="text-green-400">triplicou</span> em 30 dias."
                 </p>
                 <p className="text-brand-300 text-sm font-medium uppercase tracking-wide">
                   Resultado Típico de Aluna
                 </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
  <div className="flex gap-5">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/30">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600 leading-snug">{description}</p>
    </div>
  </div>
);