import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col gap-1 text-xs opacity-70">
          <p>Centro estratégico | Rua: 14, 516 - Jardim Goiás - Goiânia-GO</p>
          <p>CNPJ: 41.024.752/0001-70</p>
          <p className="mt-2 text-slate-400">Email para suporte: sac@semprenamoda.com.br</p>
        </div>

        <p className="mb-4">&copy; {new Date().getFullYear()} Profissionalize sua Agenda. Todos os direitos reservados.</p>

        <div className="flex justify-center gap-6">
          <a
            href="https://semprenamoda.com.br/pages/termos-de-servico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Termos de Uso
          </a>
          <a
            href="https://semprenamoda.com.br/pages/politica-de-cookies-seguranca-e-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};