import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  content: React.ReactNode;
  verified: boolean;
}

export const TestimonialsSection: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Ordem Fixa Solicitada (IDs reordenados de 1 a 11):
  // 1. Juliana, 2. Carla, 3. Jéssica, 4. Camila, 5. Patrícia, 6. Beatriz, etc.

  const testimonials: Testimonial[] = [
    // 1. Juliana Mendes
    {
      id: 1,
      name: "Juliana Mendes",
      location: "Campinas, SP",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      verified: true,
      content: (
        <>
          "Meu marido falava que unha era <span className="text-[#b49e7c] font-bold">'só um bico'</span> pra comprar meus shampoos. Aquilo doía na alma. Apliquei o método, lotei a agenda e mês passado paguei a viagem da família sozinha. Hoje, ele não chama de bico, chama de 'A Empresa da Minha Mulher'. O respeito veio com o pix caindo."
        </>
      )
    },
    // 2. Carla Ribeiro
    {
      id: 2,
      name: "Carla Ribeiro",
      location: "Manaus, AM",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      verified: true,
      content: (
        <>
          "Eu perdia o sono vigiando o preço da vizinha. Se ela cobrasse 20, eu achava que tinha que cobrar 18. O curso foi um tapa na cara: <span className="text-[#b49e7c] font-bold">quem vem por preço, vai por preço.</span> Hoje cobro o triplo dela e minha agenda tá fechada. Cliente fiel não quer desconto, quer excelência."
        </>
      )
    },
    // 3. Jéssica Oliveira
    {
      id: 3,
      name: "Jéssica Oliveira",
      location: "Curitiba, PR",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      verified: true,
      content: (
        <>
          "Eu achava que o botão 'Turbinar' era a solução, mas ele era um <span className="text-[#b49e7c] font-bold">vampiro de dinheiro</span>. Só trazia curtida de gente que mora longe. Quando aprendi a segmentação de raio curto, parei de queimar caixa e comecei a lotar a agenda com gente do meu bairro."
        </>
      )
    },
    // 4. Camila Santos
    {
      id: 4,
      name: "Camila Santos",
      location: "Salvador, BA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      verified: true,
      content: (
        <>
          "A frase que mais doía: <span className="text-[#b49e7c] font-bold">'Você faz um precinho melhor?'</span>. Eu me sentia uma mercadoria barata. Hoje, com o posicionamento que aprendi, a cliente paga R$ 80 no pé e mão sorrindo, porque ela vê valor, não preço. O desconto acabou."
        </>
      )
    },
    // 5. Patrícia Lima
    {
      id: 5,
      name: "Patrícia Lima",
      location: "Belo Horizonte, MG",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      verified: true,
      content: (
        <>
          "Eu era <span className="text-[#b49e7c] font-bold">escrava do WhatsApp</span>. Respondia curiosa às 23h de domingo achando que ia fechar venda, mas só perdia sono. O script de vendas filtrou tudo. Agora só falo com quem quer pagar. Trabalho menos e ganho mais."
        </>
      )
    },
    // 6. Beatriz Souza
    {
      id: 6,
      name: "Beatriz Souza",
      location: "Porto Alegre, RS",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      verified: true,
      content: (
        <>
          "Não é sobre comprar esmalte novo, é sobre <span className="text-[#b49e7c] font-bold">dormir tranquila</span>. Antes eu não sabia se ia pagar o aluguel da sala. Hoje, olho pro mês que vem e a agenda já tem previsão de faturamento. Essa paz não tem preço."
        </>
      )
    },
    // 7. Eliane Moreira
    {
      id: 7,
      name: "Eliane Moreira",
      location: "Ribeirão Preto, SP",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      verified: true,
      content: (
        <>
          "Tenho 15 anos de profissão e ganhava igual iniciante. Doeu na alma ver aluna da Faby com 6 meses de curso trocando de carro. Engoli o orgulho, me atualizei e descobri que <span className="text-[#b49e7c] font-bold">tempo de serviço sem técnica nova não vale nada</span>. Hoje cobro o dobro e tenho fila de espera."
        </>
      )
    },
    // 8. Larissa Nogueira
    {
      id: 8,
      name: "Larissa Nogueira",
      location: "Fortaleza, CE",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      verified: true,
      content: (
        <>
          "Eu travava porque achava que precisava de poltrona de massagem para cobrar caro. Comecei na cadeira da cozinha com o método da Faby. A cliente paga pelo <span className="text-[#b49e7c] font-bold">acabamento de luxo na unha</span>, não pelo móvel. Em 3 meses, o salão chique veio com o próprio lucro."
        </>
      )
    },
    // 9. Amanda Costa
    {
      id: 9,
      name: "Amanda Costa",
      location: "São Paulo, SP",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      verified: true,
      content: (
        <>
          "O pior pesadelo não é ficar sem cliente, é o cliente marcar e não ir. O <span className="text-[#b49e7c] font-bold">'buraco na agenda'</span> levava 30% do meu lucro. Apliquei a técnica de confirmação automática e hoje o 'bolo' é zero. Meu tempo vale dinheiro."
        </>
      )
    },
    // 10. Renata Farias
    {
      id: 10,
      name: "Renata Farias",
      location: "Goiânia, GO",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      verified: true,
      content: (
        <>
          "Eu tremia só de abrir o Gerenciador de Anúncios. Parecia grego. Mas a verdade é que <span className="text-[#b49e7c] font-bold">o simples funciona</span>. Copiei o modelo 'arroz com feijão' da Faby e na primeira semana apareceram 5 clientes novas. Sem inventar moda."
        </>
      )
    },
    // 11. Fernanda Mello
    {
      id: 11,
      name: "Fernanda Mello",
      location: "Recife, PE",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      verified: true,
      content: (
        <>
          "Eu tinha vergonha do meu cantinho na garagem. Achava que só salão chique vendia. O curso me ensinou que a cliente quer <span className="text-[#b49e7c] font-bold">cutícula funda e duração</span>, não lustre de cristal. Parei de me comparar e comecei a faturar."
        </>
      )
    },
    // 12. Vanessa Rocha (NOVO)
    {
      id: 12,
      name: "Vanessa Rocha",
      location: "Florianópolis, SC",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      verified: true,
      content: (
        <>
          "Eu postava foto de unha todo dia no Instagram e só minha prima curtia. Achava que o algoritmo me odiava. Aprendi que <span className="text-[#b49e7c] font-bold">foto sem estratégia é só álbum de família</span>. Apliquei a técnica de atração certa e agora um post me traz 3 agendamentos reais na mesma semana."
        </>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#0F1014] relative border-t border-slate-800 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#b49e7c] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-900 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#b49e7c]/10 border border-[#b49e7c]/30 text-[#b49e7c] text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_-3px_rgba(180,158,124,0.3)]">
          Contra fatos não há argumentos
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Elas pararam de dar desculpas e<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b49e7c] to-[#FFE5B4]">começaram a ter resultados</span>
        </h2>

        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#FFBB25] fill-current" />
            ))}
          </div>
          <span>4.9/5 de satisfação entre alunas</span>
        </div>
      </div>

      {/* Horizontal Scroll Container (Mobile) / Grid (Desktop) */}
      <div className="relative w-full max-w-[1400px] mx-auto">

        {/* Fade gradients for scroll indication (desktop only) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F1014] to-transparent z-20 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F1014] to-transparent z-20 pointer-events-none hidden md:block"></div>

        {/* Carousel Container */}
        <div
          className="flex overflow-x-auto gap-6 px-6 pb-4 pt-4 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:px-6 md:pb-0 md:overflow-visible justify-start md:justify-center"
          onScroll={(e) => {
            if (e.currentTarget.scrollLeft > 20) {
              setHasScrolled(true);
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center group"
            >
              <div className="h-full bg-[#1A1C23] border border-slate-800 rounded-2xl p-8 flex flex-col relative transition-all duration-500 hover:border-[#b49e7c]/50 hover:bg-[#20232b] hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">

                {/* Decorative Quote Big */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20 text-[#b49e7c] rotate-180" />
                </div>

                {/* Header User */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full border-2 border-[#b49e7c] p-0.5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-[#b49e7c] text-black rounded-full p-0.5 border-2 border-[#1A1C23]" title="Aluna Verificada">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg leading-none mb-1">{testimonial.name}</h4>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{testimonial.location}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow font-light relative z-10 italic">
                  {testimonial.content}
                </p>

                {/* Footer / Stars & Verified Badge */}
                <div className="flex items-center justify-between border-t border-slate-800/50 pt-4 mt-auto">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#FFBB25] fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#b49e7c]/10 border border-[#b49e7c]/20">
                      <CheckCircle2 className="w-3 h-3 text-[#b49e7c]" />
                      <span className="text-[10px] font-bold text-[#b49e7c] uppercase tracking-wider">Verificada</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}

          {/* Mobile "Spacer" to ensure last card doesn't stick to edge too hard */}
          <div className="flex-shrink-0 w-[5vw] md:hidden"></div>
        </div>

        {/* Disappearing "Scroll Hint" Context - Text Only */}
        <div className={`mt-6 md:hidden flex justify-center transition-opacity duration-700 ease-out ${hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium tracking-wide">
            <span>Arraste para o lado para ver mais</span>
            <ArrowRight className="w-3 h-3 text-[#b49e7c]" />
          </div>
        </div>
      </div>

    </section>
  );
};