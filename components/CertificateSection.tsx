import React from 'react';
import { Award, Check, Download } from 'lucide-react';
import { Button } from './Button';

export const CertificateSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background Gradients similar to JSON style */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#15181F] via-[#070707] to-[#15181F] opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[#b49e7c] font-bold tracking-widest uppercase text-sm mb-2 block">
            Reconhecimento Profissional
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#b49e7c]">CERTIFICADO</span> DE <span className="text-[#8c733f]">CONCLUSÃO</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não é apenas um papel. É a prova de que você domina as técnicas mais avançadas de manicure e as estratégias de marketing que lotam agendas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Certificate Image */}
          <div className="lg:w-3/5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b49e7c] to-[#8c733f] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="http://www.cursomanicure.com/wp-content/uploads/2024/04/CERTIFICADO-CURSO-MANICURE-AGENDA-LOTADA-1.png" 
              alt="Certificado Manicure Agenda Lotada" 
              className="relative rounded-lg shadow-2xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Benefits */}
          <div className="lg:w-2/5 text-left space-y-8">
            <div className="bg-[#1D2029] p-6 rounded-2xl border border-[#8C733F]/30">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 <Award className="w-6 h-6 text-[#b49e7c]" />
                 Diferencial de Mercado
               </h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                 Mostre para suas clientes que você é uma profissional capacitada pela Instrutora Master Faby Cardoso. Isso justifica seu preço e gera confiança imediata.
               </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#b49e7c]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#b49e7c]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Válido em Todo Território Nacional</h4>
                  <p className="text-slate-500 text-sm">Curso livre profissionalizante.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#b49e7c]/20 flex items-center justify-center flex-shrink-0">
                  <Download className="w-4 h-4 text-[#b49e7c]" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Download Imediato após Conclusão</h4>
                  <p className="text-slate-500 text-sm">Baixe, imprima e coloque na moldura do seu salão.</p>
                </div>
              </li>
            </ul>

            <a href="https://go.hotmart.com/B103637226N?ap=0f72&off=4a5h6otc" className="block mt-6">
              <Button className="w-full bg-[#189B26] hover:bg-[#127a1d] text-white shadow-lg shadow-green-900/40">
                QUERO MEU CERTIFICADO
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};