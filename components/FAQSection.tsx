import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  // Estado para rastrear qual item está aberto pelo índice (null = nenhum aberto)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Estou sem dinheiro agora. Não é melhor esperar sobrar?",
      answer: (
        <>
          Vamos ser sinceras: se você continuar fazendo exatamente o que faz hoje, <strong className="text-slate-900">vai sobrar dinheiro mês que vem?</strong> Provavelmente não. O curso não é um "gasto", é a ferramenta para mudar essa realidade. O valor da parcela (R$ 15,41) é menos do que você cobra em MEIA mão. Se o curso te trouxer UMA cliente nova no mês, ele já se pagou e ainda deu lucro.
        </>
      )
    },
    {
      question: "Já fiz outros cursos e não tive resultado. Por que esse funcionaria?",
      answer: (
        <>
          Porque os outros cursos te ensinaram a ser manicure, mas <strong className="text-slate-900">esqueceram de te ensinar a vender</strong>. Saber fazer unha bonita e não saber lotar agenda é como ter uma Ferrari sem gasolina. Aqui você aprende os dois: a técnica que fideliza e o marketing que atrai. É o método completo, sem pontas soltas.
        </>
      )
    },
    {
      question: "Sou péssima com tecnologia/celular. Vou dar conta?",
      answer: (
        <>
          Se você sabe mandar um áudio no WhatsApp e curtir uma foto no Instagram, você já sabe o suficiente. O método foi desenhado para quem tem a vida corrida e não quer virar "expert em marketing". As aulas são <strong className="text-slate-900">clique a clique</strong>. A Faby mostra na tela dela e você só copia na sua. Sem termos difíceis.
        </>
      )
    },
    {
      question: "Não tenho tempo para estudar, minha rotina é louca.",
      answer: (
        <>
          Justamente por sua rotina ser louca que você precisa desse curso. Você trabalha muito e ganha pouco porque atrai clientes que sugam seu tempo e pagam pouco. O curso é 100% online. Você pode assistir enquanto almoça, no ônibus, ou nos intervalos entre uma cliente e outra. <strong className="text-slate-900">15 minutos por dia</strong> já são suficientes para começar a ver resultado.
        </>
      )
    },
    {
      question: "E se eu comprar e achar que não é pra mim?",
      answer: (
        <>
          O risco é zero. Literalmente. Você tem 7 dias de Garantia Blindada. Você entra, assiste às aulas, baixa os materiais, vê as técnicas. Se por qualquer motivo (ou até sem motivo) você não quiser continuar, é só apertar um botão na plataforma e <strong className="text-slate-900">100% do seu dinheiro volta para sua conta</strong>. Sem letras miúdas, sem precisar justificar.
        </>
      )
    }
  ];

  const handleToggle = (index: number) => {
    // Se clicar no item já aberto, fecha ele (null). Senão, abre o novo item.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-6">
             <HelpCircle className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ainda com dúvida?<br/>
            <span className="text-brand-600">O único risco é você continuar no mesmo lugar.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Essas são as perguntas de quem decidiu parar de adiar o sucesso e começar a ganhar dinheiro de verdade.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AccordionItemProps extends FAQItem {
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-500 shadow-lg shadow-brand-100 ring-1 ring-brand-500' : 'border-slate-200 hover:border-brand-300'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-brand-700' : 'text-slate-800 group-hover:text-brand-600'}`}>
            {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent mt-0">
          {answer}
        </div>
      </div>
    </div>
  );
};