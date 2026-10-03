import React, { useState, useEffect } from "react";

export default function App() {
  // Dynamic Brazilian date string: DD/MM/YYYY
  const [currentDate, setCurrentDate] = useState("03/10/2026");

  // Urgency countdown timer (e.g. starts around 14 min 41 sec)
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 41);

  // FAQ open/close states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const scrollToPlanos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("planos");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const marqueeImages = [
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_1-1788733040711.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_2-1788733043031.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_3-1788733046665.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_4-1788733049308.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_4a44306b-1788733054625.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_26567058-1788733065670.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_4c7c9b45-1788733072367.webp",
    "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/materiais-mat_96da05d5-1788733075962.webp",
  ];

  const bonusList = [
    {
      num: 1,
      nome: "GUIA PRÁTICO DE COMBINAÇÃO DE ESTAMPAS",
      desc: 'Receba um manual visual em PDF ensinando a misturar florais, poás, xadrezes e tecidos lisos sem deixar a peça com cara de "bagunça". Descubra o segredo para criar uma harmonia visual perfeita e deixar suas peças de retalho com um acabamento sofisticado, charmoso e profissional.',
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_1_img-1788643928607.webp",
    },
    {
      num: 2,
      nome: "MANUAL DE ORGANIZAÇÃO DE RETALHOS",
      desc: "Chega de guardar sobras amassadas em sacolas! Receba um guia em PDF ensinando como separar, cortar e armazenar seus retalhos por cor e tamanho (tiras, quadrados, triângulos). Transforme a sua bagunça em um acervo organizado que inspira a sua criatividade toda vez que você sentar para costurar.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_2_img-1788643933511.webp",
    },
    {
      num: 3,
      nome: "GUIA DE PEÇAS EXPRESS (PRONTAS EM 30 MINUTOS)",
      desc: "Receba um caderno extra em PDF com projetos ultrarrápidos para aqueles dias em que você tem pouco tempo. Transforme pequenos pedaços de tecido em chaveiros, porta-copos, ecopads e marcadores de página num piscar de olhos. Ideais para dar de brinde, presentear ou fazer uma venda rápida.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_3_img-1788643939373.webp",
    },
    {
      num: 4,
      nome: "TÉCNICA DO BLOCO INFINITO (COSTURA INTELIGENTE)",
      desc: 'Receba um tutorial visual em PDF ensinando como unir aqueles retalhos de formatos estranhos e irregulares que pareciam inúteis. Aprenda a técnica de costurar pedaço por pedaço até formar um "tecido novo" e gigante, aproveitando literalmente cada centímetro que ia parar no lixo.',
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_4_img-1788643947190.webp",
    },
    {
      num: 5,
      nome: "GUIA DE PATCHCOLAGEM E APLICAÇÕES",
      desc: "Sabe aqueles retalhos minúsculos que não dão costura? Receba um manual em PDF com moldes para transformar essas sobras em corações, flores e letras usando papel termocolante. Enriqueça panos de prato, ecobags e toalhas com detalhes aplicados e fáceis de fazer.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_5_img-1788643952564.webp",
    },
    {
      num: 6,
      nome: "GUIA DE PRECIFICAÇÃO: COMO VENDER RETALHOS",
      desc: "Se o retalho é sobra, como calcular o preço para vender? Receba um manual prático em PDF ensinando a precificar o seu tempo de montagem, a manta, os botões e a linha. Perca o medo de dar o seu preço e transforme sobras esquecidas no armário em uma renda extra lucrativa e real.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_6_img-1788643959163.webp",
    },
    {
      num: 7,
      nome: "ACERVO ESPECIAL: KIT COZINHA LUCRATIVO",
      desc: "Receba projetos e medidas extras em PDF focados no nicho que mais vende na costura criativa. Aprenda a montar pegadores de panela, luvas térmicas e barrados para panos de prato usando a técnica de tiras de retalhos. Crie kits lindos e combinando que as clientes amam comprar para decorar a casa.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_7_img-1788643963886.webp",
    },
    {
      num: 8,
      nome: "TÉCNICA LIXO ZERO (APROVEITAMENTO 100%)",
      desc: "Receba um guia em PDF revelando o que fazer com os fiapos de linha e pedacinhos esfiapados que sobram até mesmo dos projetos de retalhos. Aprenda a técnica do enchimento sustentável para almofadas e agulheiros, garantindo que absolutamente nenhum material seu seja desperdiçado.",
      img: "https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/bonus-bonus_8_img-1788643968406.webp",
    },
  ];

  const faqs = [
    {
      q: "Preciso saber costurar bem para usar?",
      a: "Não, os projetos são simples e têm passo a passo detalhado.",
    },
    {
      q: "Os moldes vêm prontos?",
      a: "Sim, todos os moldes estão prontos para impressão.",
    },
    {
      q: "O acesso é imediato?",
      a: "Sim, após a confirmação do pagamento, o acesso é liberado.",
    },
    {
      q: "Posso utilizar no celular?",
      a: "Sim, o PDF é acessível em dispositivos móveis.",
    },
    {
      q: "E se eu não gostar do material?",
      a: "Você tem 15 dias para solicitar reembolso sem burocracia.",
    },
    {
      q: "Os bônus são incluídos no preço?",
      a: "Sim, todos os bônus são gratuitos e acompanham o eBook.",
    },
  ];

  const checkIcon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      className="h-4 w-4 shrink-0 fill-[#39B574]"
    >
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  );

  const starIcon = (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      className="h-5 w-5 fill-[#FBB03B]"
    >
      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
    </svg>
  );

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#FCE4EC] text-[#D81B60] font-sans text-[18px] leading-[1.6]">
      {/* SEÇÃO 0: Announcement Bar */}
      <div id="secao-0" className="scroll-mt-20">
        <div className="w-full text-center text-base sm:text-lg py-3.5 px-4 font-bold tracking-wide bg-[#ff0000] text-white">
          ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span>{currentDate}</span>
        </div>
      </div>

      {/* SEÇÃO 1: Hero Principal */}
      <div id="secao-1" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#EC407A] text-white">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="max-w-3xl mx-auto -mt-6 sm:mt-0">
              <span className="inline-block text-sm sm:text-base font-bold px-6 py-2 rounded-full mb-5 bg-[#FCE9D8] text-[#3A1B09]">
                🔒 Compra 100% Segura e Protegida
              </span>

              <h1 className="font-heading text-[30px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-[-0.02em] leading-[1.05] text-white mt-0">
                +30 PROJETOS FÁCEIS PARA TRANSFORMAR SEUS RETALHOS EM PEÇAS LINDAS E ÚTEIS
              </h1>

              <p className="text-[18px] sm:text-[22px] lg:text-[24px] max-w-2xl mx-auto mt-4 text-white/95 font-medium leading-[1.4]">
                Siga o passo a passo e aproveite os tecidos que você já tem para criar, presentear ou até vender.
              </p>

              <div className="my-[18px]">
                <img
                  src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/hero-mockup_hero-1788643789893.webp"
                  width={340}
                  height={340}
                  alt="Mockup do Livro de Projetos"
                  className="max-h-[520px] mx-auto object-contain rounded-[18px]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-2 text-white/95 font-normal">
                Escolha um projeto, separe seus retalhos e siga as instruções do início ao acabamento.
              </p>

              <div className="mt-8 flex justify-center">
                <ul className="space-y-3 text-left inline-block">
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    {checkIcon}
                    <span className="text-white">+30 projetos com retalhos</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    {checkIcon}
                    <span className="text-white">Passo a passo simples e visual</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    {checkIcon}
                    <span className="text-white">Lista de materiais de cada peça</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    {checkIcon}
                    <span className="text-white">Moldes quando necessário</span>
                  </li>
                  <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                    {checkIcon}
                    <span className="text-white font-bold">Pronto para consultar ou imprimir</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#planos"
                  onClick={scrollToPlanos}
                  className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[#39B574] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] font-semibold rounded-full tracking-[-0.01em] uppercase cursor-pointer"
                >
                  QUERO OS 30 PROJETOS AGORA
                </a>
              </div>

              <p className="text-sm sm:text-base opacity-85 mt-4">
                📲 <b>Você recebe tudo na hora, direto no seu WhatsApp e e-mail</b>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 2: Materiais (Carrossel Contínuo) */}
      <div id="secao-2" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE9D8] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              VEJA ALGUNS DOS PROJETOS QUE VOCÊ VAI PODER FAZER
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black font-bold">
              Ideias prontas para você parar de acumular retalhos e começar a criar.
            </p>

            <div className="mt-10 overflow-hidden w-full relative">
              <div className="animate-marquee flex gap-6">
                {[...marqueeImages, ...marqueeImages].map((url, i) => (
                  <div key={i} className="flex-none px-2">
                    <img
                      src={url}
                      alt={`Projeto ${i + 1}`}
                      className="h-[280px] sm:h-[420px] w-auto object-contain rounded-xl shadow-sm"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 3: Feito para facilitar sua criação */}
      <div id="secao-3" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE9D8] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              FEITO PARA FACILITAR SUA CRIAÇÃO
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] bg-white text-black border border-black/10 shadow-sm">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/laser.png"
                  alt="Projetos prontos"
                  className="h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-base sm:text-lg leading-snug">
                  <strong>🧵 Projetos prontos para escolher</strong>
                  <br />
                  Não fique pensando no que fazer com seus tecidos.
                </span>
              </div>

              <div className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] bg-white text-black border border-black/10 shadow-sm">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/scale.png"
                  alt="Passo a passo simples"
                  className="h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-base sm:text-lg leading-snug">
                  <strong>✂️ Passo a passo simples</strong>
                  <br />
                  Veja a sequência de montagem de cada peça.
                </span>
              </div>

              <div className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] bg-white text-black border border-black/10 shadow-sm">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/manual-book.png"
                  alt="Materiais organizados"
                  className="h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-base sm:text-lg leading-snug">
                  <strong>📋 Materiais organizados</strong>
                  <br />
                  Saiba o que separar antes de começar.
                </span>
              </div>

              <div className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] bg-white text-black border border-black/10 shadow-sm">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/download.png"
                  alt="Celular ou impressão"
                  className="h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-base sm:text-lg leading-snug">
                  <strong>📱 Celular ou impressão</strong>
                  <br />
                  Consulte o guia do jeito que preferir.
                </span>
              </div>

              <div className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] bg-white text-black border border-black/10 shadow-sm sm:col-span-2 sm:max-w-md sm:mx-auto w-full">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/folders-1.png"
                  alt="Projetos testados"
                  className="h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <span className="font-semibold text-base sm:text-lg leading-snug">
                  <strong>📐 Projetos testados</strong>
                  <br />
                  Tenha uma referência pronta para facilitar o corte.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 4: Quantos retalhos estão guardados (Urgência + Timer) */}
      <div id="secao-4" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#EC407A] text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-black tracking-[-0.02em] leading-[1.1] text-white">
                QUANTOS RETALHOS ESTÃO GUARDADOS AÍ SEM VOCÊ SABER O QUE FAZER COM ELES?
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/95">
                Escolha um projeto e comece a transformar esses tecidos ainda hoje.
              </p>

              {/* Countdown Display */}
              <div className="flex gap-6 justify-center pt-4 text-white">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-black tabular-nums">
                    {String(minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-80">
                    Minutos
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-black tabular-nums">
                  :
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-black tabular-nums">
                    {String(seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-wider opacity-80">
                    Segundos
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#planos"
                  onClick={scrollToPlanos}
                  className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[#39B574] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] font-semibold rounded-full tracking-[-0.01em] uppercase cursor-pointer"
                >
                  QUERO ACESSAR AGORA E USAR HOJE
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 5: Para quem é este guia */}
      <div id="secao-5" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              ESTE GUIA É IDEAL PARA VOCÊ QUE DESEJA
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
              {[
                {
                  title: "APROVEITAR OS RETALHOS QUE JÁ TEM",
                  desc: "Transforme pedaços esquecidos em novas peças.",
                },
                {
                  title: "NUNCA FICAR SEM IDEIAS DO QUE FAZER",
                  desc: "Tenha mais de 30 projetos prontos para escolher.",
                },
                {
                  title: "CRIAR PEÇAS BONITAS PARA SUA CASA",
                  desc: "Dê uma nova utilidade aos tecidos que estavam parados.",
                },
                {
                  title: "FAZER PRESENTES FEITOS À MÃO",
                  desc: "Crie peças especiais para pessoas queridas.",
                },
                {
                  title: "TER UM PASSO A PASSO PARA SEGUIR",
                  desc: "Não fique tentando descobrir sozinha como montar cada projeto.",
                },
                {
                  title: "CRIAR PEÇAS QUE TAMBÉM PODE VENDER",
                  desc: "Use seus retalhos para produzir novos trabalhos artesanais.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.05] bg-[#EFFBF2] border border-[#BFE7CF] text-black shadow-sm"
                >
                  <span className="shrink-0 mt-1">{checkIcon}</span>
                  <div>
                    <h3 className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 6: Tudo o que você vai receber */}
      <div id="secao-6" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              TUDO O QUE VOCÊ VAI RECEBER
            </h2>

            <div className="max-w-2xl mx-auto mt-10 rounded-[18px] overflow-hidden p-8 sm:p-10 space-y-6 bg-[#F50057] text-white shadow-xl">
              <div className="text-center">
                <span className="inline-block text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full bg-[#39B574] text-white shadow">
                  ⚡ ACESSO IMEDIATO
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl text-center font-black tracking-[-0.02em] leading-[1.1] text-white">
                +30 PROJETOS PRONTOS PARA VOCÊ ESCOLHER E COMEÇAR
              </h3>

              <p className="text-center text-base sm:text-lg opacity-90 text-white font-bold">
                Separe seus retalhos, escolha a peça e siga o passo a passo.
              </p>

              <div className="my-4">
                <img
                  src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/pacote-mockup_pacote-1788643805355.webp"
                  width={700}
                  height={394}
                  alt="Pacote completo de projetos"
                  className="w-full max-h-[420px] object-contain rounded-[12px]"
                  loading="lazy"
                />
              </div>

              <ul className="text-white">
                {[
                  "+30 projetos criativos com retalhos",
                  "Passo a passo visual de cada peça",
                  "Lista de materiais necessários",
                  "Instruções de corte e montagem",
                  "Moldes nos projetos que precisarem",
                  "Ideias para usar, presentear ou vender",
                  "PDF para celular, tablet ou impressão",
                  "Acesso digital imediato",
                  "E muito mais…",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-3 items-start py-3.5 text-base sm:text-lg ${
                      idx > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <span className="shrink-0 mt-1">{checkIcon}</span>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 7: 8 Bônus Exclusivos */}
      <div id="secao-7" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              E NÃO PARA POR AÍ... TEM MAIS!
            </h2>

            <p className="text-center text-2xl sm:text-3xl italic font-bold opacity-90 mt-5">
              Você também vai receber…
            </p>

            <div className="text-center mt-5 mb-12">
              <span className="inline-block text-base sm:text-lg font-extrabold px-7 py-3 rounded-full bg-[#FF8F00] text-white shadow-md">
                🎁 8 BÔNUS EXCLUSIVOS
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {bonusList.map((bonus) => (
                <div
                  key={bonus.num}
                  className="rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.05] bg-[#FCE9D8] border border-black/5 shadow-sm"
                >
                  <div className="relative bg-black/[0.04] flex items-center justify-center">
                    <img
                      src={bonus.img}
                      width={700}
                      height={394}
                      alt={bonus.nome}
                      className="h-72 sm:h-80 w-full object-contain p-3"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-md bg-[#FFE08A] text-[#2D1107] shadow-sm">
                      BÔNUS #{bonus.num}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <h3 className="font-black leading-tight text-xl sm:text-2xl text-[#D81B60]">
                      {bonus.nome}
                    </h3>
                    <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                      {bonus.desc}
                    </p>

                    <div className="mt-auto pt-3 flex justify-center">
                      <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                        <span className="opacity-80">Valor:</span>
                        <s className="opacity-60">R$27</s>
                        <span className="font-extrabold text-[#39B574]">GRÁTIS</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 8: Planos (Básico + Completo) */}
      <div id="secao-8" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <div id="planos" className="scroll-mt-20">
              <div className="text-center mb-12 space-y-5">
                <span className="inline-block text-base sm:text-lg font-extrabold px-7 py-3.5 rounded-full bg-[#FF8F00] text-white shadow-md">
                  🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
                </span>

                <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
                  ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
                </h2>

                <div className="mx-auto h-[3px] w-24 rounded-full bg-[#D81B60]"></div>
              </div>

              <div className="grid gap-6 mx-auto items-stretch md:grid-cols-2 max-w-5xl">
                {/* PLANO BÁSICO */}
                <div className="rounded-[18px] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden bg-[#FCE9D8] text-[#D81B60] border border-black/10 shadow-lg">
                  <h3 className="font-heading text-3xl sm:text-4xl text-center font-black tracking-[-0.02em] leading-[1.1]">
                    PLANO BÁSICO
                  </h3>

                  <img
                    src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/planos-basico_mockup-1788643867017.webp"
                    width={700}
                    height={700}
                    alt="Plano Básico"
                    className="h-72 sm:h-80 w-full object-contain"
                    loading="lazy"
                  />

                  <p className="text-base font-bold text-black">Você recebe:</p>

                  <ul className="divide-y divide-black/10">
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5 text-black">
                      <span className="mt-1">{checkIcon}</span>
                      <span>
                        <b>+30 projetos criativos feitos com retalhos</b>
                      </span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5 text-black">
                      <span className="mt-1">{checkIcon}</span>
                      <span>
                        <b>Passo a passo visual de cada projeto</b>
                      </span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5 text-black">
                      <span className="mt-1">{checkIcon}</span>
                      <span>
                        <b>Projetos prontos para imprimir</b>
                      </span>
                    </li>
                    <li className="flex gap-3 text-base sm:text-lg items-start py-3.5 text-black">
                      <span className="mt-1">{checkIcon}</span>
                      <span>
                        <b>Acesso imediato após a compra</b>
                      </span>
                    </li>
                  </ul>

                  <div className="text-center mt-auto">
                    <p className="text-sm sm:text-base line-through opacity-70 text-black">
                      de <span>R$97,90</span> por:
                    </p>
                    <p className="font-heading text-5xl sm:text-6xl mt-1 font-black tracking-[-0.02em] leading-[1.1] text-[#39B574]">
                      R$ 17,90
                    </p>
                    <p className="text-base mt-2 opacity-80 text-black font-medium">
                      ou 4x de R$4,48 no cartão
                    </p>
                    <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5 text-black">
                      <span className="text-[#39B574]">●</span> Você economiza{" "}
                      <strong>R$80,00</strong>
                    </p>
                  </div>

                  <a
                    href="https://pay.lowify.com.br/checkout.php?product_id=mztCsT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[#39B574] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] font-semibold rounded-full tracking-[-0.01em] uppercase cursor-pointer"
                  >
                    QUERO O PLANO BÁSICO
                  </a>

                  <div className="md:hidden -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-5 py-3 text-center bg-[#FFD54A] text-[#D81B60]">
                    92% das pessoas aproveitam o plano abaixo 👇
                  </div>
                </div>

                {/* PLANO COMPLETO */}
                <div className="rounded-[18px] p-6 sm:p-8 flex flex-col gap-5 relative bg-[#C51162] text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] border border-white/20">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full whitespace-nowrap bg-[#39B574] text-white shadow-lg">
                    ⚡ MAIS VENDIDO
                  </span>

                  <div className="text-center pt-2">
                    <span className="inline-block text-sm sm:text-base font-extrabold px-5 py-2.5 rounded-full bg-[#FF8F00] text-white shadow-md">
                      🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl sm:text-4xl text-center font-black tracking-[-0.02em] leading-[1.1] text-white">
                    PLANO COMPLETO
                  </h3>

                  <img
                    src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/c29492dc-f388-4144-a426-17af35a471d4/planos-completo_mockup-1788643876305.webp"
                    width={700}
                    height={700}
                    alt="Plano Completo"
                    className="h-72 sm:h-80 w-full object-contain"
                    loading="lazy"
                  />

                  <div className="text-center text-base sm:text-lg font-extrabold rounded-full py-3 bg-[#2ecc71]/20 text-[#2ecc71] border border-[#2ecc71]/30">
                    ⚡ 2x MAIS CONTEÚDOS
                  </div>

                  <ul className="divide-y divide-white/10 text-white">
                    {[
                      "+30 projetos criativos feitos com retalhos",
                      "Tudo do Plano Básico",
                      "🎁 GUIA PRÁTICO DE COMBINAÇÃO DE ESTAMPAS",
                      "🎁 MANUAL DE ORGANIZAÇÃO DE RETALHOS",
                      "🎁 GUIA DE PEÇAS EXPRESS (PRONTAS EM 30 MINUTOS)",
                      "🎁 TÉCNICA DO BLOCO INFINITO (COSTURA INTELIGENTE)",
                      "🎁 GUIA DE PATCHCOLAGEM E APLICAÇÕES",
                      "🎁 GUIA DE PRECIFICAÇÃO: COMO VENDER RETALHOS",
                      "🎁 ACERVO ESPECIAL: KIT COZINHA LUCRATIVO",
                      "🎁 TÉCNICA LIXO ZERO (APROVEITAMENTO 100%)",
                    ].map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-base sm:text-lg items-start py-3.5"
                      >
                        <span className="mt-1">{checkIcon}</span>
                        <span>
                          <b>{feature}</b>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-auto">
                    <p className="text-sm sm:text-base line-through opacity-80 text-white">
                      de <span>R$127,90</span> por:
                    </p>
                    <p className="font-heading text-5xl sm:text-6xl mt-1 font-black tracking-[-0.02em] leading-[1.1] text-[#39B574]">
                      R$ 27,90
                    </p>
                    <p className="text-base mt-2 opacity-90 text-white">
                      ou 6x de R$5,00 no cartão
                    </p>
                    <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5 text-white">
                      <span className="text-[#39B574]">●</span> Você economiza{" "}
                      <strong>R$100,00</strong>
                    </p>
                  </div>

                  <a
                    href="https://pay.lowify.com.br/go.php?offer=7ccd16c9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[#39B574] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] font-semibold rounded-full tracking-[-0.01em] uppercase cursor-pointer"
                  >
                    QUERO O PLANO COMPLETO
                  </a>

                  <div className="flex justify-center pt-3">
                    <img
                      src="https://origin.mentoriaprocesso.com/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                      alt="Meios de pagamento aceitos"
                      className="h-7 object-contain opacity-95 brightness-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="mt-10 max-w-3xl mx-auto rounded-[14px] p-6 flex gap-4 items-start bg-[#EFFBF2] border border-[#BFE7CF] text-black shadow-sm">
                <span className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-lg bg-[#39B574] text-white font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-extrabold uppercase text-base sm:text-lg text-black">
                    UM ÚNICO PROJETO PODE PAGAR O VALOR DO EBOOK INTEIRO.
                  </p>
                  <p className="text-base sm:text-lg opacity-85 mt-1 text-black/80">
                    Todo o resto vira margem.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base mt-6 text-center text-black/80">
                🔒 Compra 100% segura e garantida.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 9: Depoimentos */}
      <div id="secao-9" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO
            </h2>
            <p className="text-center mt-4 text-base sm:text-lg opacity-80 text-black">
              Leia os depoimentos de quem já tomou a decisão certa.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                <div className="mb-4">
                  <div className="flex gap-1" aria-label="Classificado como 5 de 5">
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-5 text-black/80 italic">
                  "Eu tinha uma caixa cheia de retalhos e sempre guardava pensando que um dia faria alguma coisa. Com os projetos prontos ficou muito mais fácil escolher uma ideia e realmente começar."
                </p>
                <p className="font-bold text-base sm:text-lg text-[#D81B60]">
                  MARIA A.
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-0.5 text-black">
                  Apaixonada por costura criativa
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5">
                <div className="mb-4">
                  <div className="flex gap-1" aria-label="Classificado como 5 de 5">
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-5 text-black/80 italic">
                  "Gostei porque não preciso ficar procurando inspiração toda vez. Escolho o projeto, vejo os materiais e acompanho o passo a passo."
                </p>
                <p className="font-bold text-base sm:text-lg text-[#D81B60]">
                  RITA P.
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-0.5 text-black">
                  Artesã
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm border border-black/5 sm:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <div className="flex gap-1" aria-label="Classificado como 5 de 5">
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-5 text-black/80 italic">
                  "Já consegui aproveitar tecidos que estavam guardados há muito tempo. Fiz algumas peças para casa e outras ficaram lindas para presentear."
                </p>
                <p className="font-bold text-base sm:text-lg text-[#D81B60]">
                  JULIA A.
                </p>
                <p className="text-sm sm:text-base opacity-70 mt-0.5 text-black">
                  Costureira artesanal
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 10: Garantia */}
      <div id="secao-10" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-white text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-4xl mx-auto grid sm:grid-cols-[260px_1fr] gap-10 items-center">
              <div className="flex justify-center relative">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/garantia-15-dias-1.png"
                  alt="Garantia de 15 dias"
                  className="w-full max-w-[260px] object-contain"
                  loading="lazy"
                />
              </div>

              <div>
                <h2 className="font-heading text-[32px] sm:text-[44px] lg:text-[48px] mb-5 font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
                  GARANTIA DE 15 DIAS — ZERO RISCO PRA VOCÊ
                </h2>

                <p className="text-base sm:text-lg mb-4 leading-relaxed text-black font-semibold">
                  Isso significa que,{" "}
                  <span className="font-normal">a qualquer momento, se você achar que:</span>
                </p>

                <ul className="space-y-3 mb-5 text-black">
                  <li className="flex gap-2 items-center text-base sm:text-lg">
                    <span className="text-[#FF8F00] font-bold">●</span>
                    <span>o material não faz sentido para você</span>
                  </li>
                  <li className="flex gap-2 items-center text-base sm:text-lg">
                    <span className="text-[#FF8F00] font-bold">●</span>
                    <span>os projetos não atendem sua necessidade</span>
                  </li>
                  <li className="flex gap-2 items-center text-base sm:text-lg">
                    <span className="text-[#FF8F00] font-bold">●</span>
                    <span>ou simplesmente não quiser continuar</span>
                  </li>
                </ul>

                <p className="text-base sm:text-lg leading-relaxed text-black/90">
                  Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do nosso lado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 11: Como é o acesso */}
      <div id="secao-11" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              COMO É O ACESSO
            </h2>
            <p className="text-center opacity-70 mt-4 uppercase text-sm tracking-[0.25em] font-bold text-black">
              (Siga estes passos simples para começar a criar.)
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              {/* Passo 1 */}
              <div className="text-center px-2 group">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/order.png"
                  alt="Conclua sua compra"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-[-0.01em] text-[#D81B60]">
                  Conclua sua compra
                </h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-black">
                  Após o pagamento, seu acesso é liberado automaticamente.
                </p>
                <ul className="mt-3 space-y-1.5 text-left inline-block text-black">
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Receba o eBook no seu e-mail</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Baixe o PDF no seu celular ou tablet</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Acesse os bônus exclusivos</span>
                  </li>
                </ul>
              </div>

              {/* Passo 2 */}
              <div className="text-center px-2 group">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/member-card.png"
                  alt="Área de membros"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-[-0.01em] text-[#D81B60]">
                  Entre na área de membros
                </h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-black">
                  Acesse todos os projetos e materiais disponíveis.
                </p>
                <ul className="mt-3 space-y-1.5 text-left inline-block text-black">
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Navegue pelos projetos</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Escolha o que deseja fazer</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Comece a criar agora mesmo</span>
                  </li>
                </ul>
              </div>

              {/* Passo 3 */}
              <div className="text-center px-2 group">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/folders-1.png"
                  alt="Baixe os arquivos"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-[-0.01em] text-[#D81B60]">
                  Baixe os arquivos
                </h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-black">
                  Imprima ou consulte diretamente no seu dispositivo.
                </p>
                <ul className="mt-3 space-y-1.5 text-left inline-block text-black">
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Imprima moldes e instruções</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Tenha tudo à mão para criar</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Facilite sua experiência de costura</span>
                  </li>
                </ul>
              </div>

              {/* Passo 4 */}
              <div className="text-center px-2 group">
                <img
                  src="https://origin.mentoriaprocesso.com/mvt/digital-drawing.png"
                  alt="Use e aplique"
                  className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                <h3 className="font-black mb-2 text-xl sm:text-2xl tracking-[-0.01em] text-[#D81B60]">
                  Use e aplique
                </h3>
                <p className="text-base sm:text-lg opacity-80 leading-relaxed text-black">
                  Coloque a mão na massa e comece a criar!
                </p>
                <ul className="mt-3 space-y-1.5 text-left inline-block text-black">
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Transforme retalhos em peças incríveis</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Divirta-se criando</span>
                  </li>
                  <li className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                    <span className="shrink-0 mt-0.5">{checkIcon}</span>
                    <span>Compartilhe suas criações com o mundo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="#planos"
                onClick={scrollToPlanos}
                className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] bg-[#39B574] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] font-semibold rounded-full tracking-[-0.01em] uppercase cursor-pointer"
              >
                QUERO ACESSAR AGORA
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 12: Perguntas Frequentes (FAQ) */}
      <div id="secao-12" className="scroll-mt-20">
        <section className="w-full px-4 py-16 sm:py-20 bg-[#FCE4EC] text-[#D81B60]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[40px] sm:text-[52px] lg:text-[60px] text-center font-black tracking-[-0.02em] leading-[1.1] text-[#D81B60]">
              PERGUNTAS FREQUENTES
            </h2>

            <div className="max-w-3xl mx-auto mt-10 divide-y divide-black/10">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-6">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left cursor-pointer text-xl sm:text-2xl font-semibold flex justify-between items-center text-[#D81B60] focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`ml-4 text-3xl font-light transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-4 text-base sm:text-lg text-black/85 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 13: Rodapé */}
      <div id="secao-13" className="scroll-mt-20">
        <footer className="px-4 py-14 text-center text-sm sm:text-base space-y-4 bg-[#111111] text-white">
          <p className="font-semibold text-base sm:text-lg">
            ©️ Todos os direitos reservados.
          </p>
          <p className="opacity-80 max-w-3xl mx-auto leading-relaxed text-white/80">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
            Após sair do Facebook, a responsabilidade não é deles e sim do nosso
            site. Fazemos todos os esforços para indicar claramente e mostrar todas
            as provas do produto e usamos resultados reais. Nós não vendemos o seu
            e-mail ou qualquer informação para terceiros. Jamais fazemos algum
            tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para
            usar o link de contato e falar conosco em horário comercial de Segunda
            a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens
            por ordem de chegada.
          </p>
        </footer>
      </div>
    </div>
  );
}
