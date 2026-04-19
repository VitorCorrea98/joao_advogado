import { WhatsAppButton } from '../components/WhatsappButton';

const PHONE_NUMBER = "5511999999999";

export const LaborLaw = () => {
  const employeeRights = [
    "Rescisão Indireta (A justa causa do empregador)",
    "Cálculo e cobrança de Verbas Rescisórias",
    "Horas Extras não pagas",
    "Reversão de Justa Causa injusta",
    "Acidente de Trabalho e Doenças Ocupacionais",
    "Assédio Moral no ambiente de trabalho",
    "Reconhecimento de Vínculo Empregatício",
    "Estabilidade (Gestante, Cipeiro, Acidentado)",
    "Planejamento de Aposentadoria",
    "Concessão e Revisão de Benefícios do INSS"
  ];

  return (
    <div className="flex flex-col bg-cs-iceWhite min-h-screen">

      {/* HERO DA CAPTAÇÃO */}
      <section className="bg-cs-darkGreen text-cs-iceWhite py-24 px-6 text-center border-b-[6px] border-cs-goldDark shadow-premium relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-cs-goldDark uppercase tracking-widest text-sm font-bold mb-4 block">Especialidade Jurídica</span>
          <h1 className="text-4xl md:text-5xl text-cs-iceWhite lg:text-6xl font-serif font-bold mb-8 leading-tight">
            A proteção definitiva dos seus direitos trabalhistas e previdenciários.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-cs-iceWhite/80 text-balance mx-auto max-w-2xl">
            Estratégia jurídica implacável para trabalhadores e consultoria preventiva blindada para empresas.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton text="Analisar meu caso agora" phoneNumber={PHONE_NUMBER} customMessage="Olá, preciso de análise especializada para um caso Trabalhista/Previdenciário." />
          </div>
        </div>
      </section>

      {/* ÁREA DE DORES E SOLUÇÕES (Conversão) */}
      <section className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cs-darkGreen mb-4">Como podemos te defender?</h2>
          <div className="w-12 h-1 bg-cs-goldDark mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Card Trabalhador (Dores comuns) */}
          <div className="bg-white p-10 md:p-12 rounded-sm shadow-premium border-t-[4px] border-cs-darkGreen">
            <h3 className="text-2xl font-serif font-bold text-cs-darkGreen mb-3">Para Trabalhadores</h3>
            <p className="text-cs-graphite/70 font-light mb-8 text-sm uppercase tracking-wider">Pessoa Física</p>

            <ul className="space-y-5 mb-10">
              {employeeRights.map((item, index) => (
                <li key={index} className="flex items-start text-cs-graphite">
                  <span className="text-cs-goldDark mr-3 text-lg mt-0.5">✓</span>
                  <span className="font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppButton text="Sou Trabalhador" phoneNumber={PHONE_NUMBER} customMessage="Olá, sou trabalhador e preciso de ajuda jurídica." />
          </div>

          {/* Card Empresa (Proteção) */}
          <div className="bg-cs-darkGreen p-10 md:p-12 rounded-sm shadow-premium border-t-[4px] border-cs-goldDark text-cs-iceWhite flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-cs-goldDark mb-3">Para Empresas</h3>
            <p className="text-cs-iceWhite/60 font-light mb-8 text-sm uppercase tracking-wider">Pessoa Jurídica</p>

            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-start text-cs-iceWhite/90">
                <span className="text-cs-goldDark mr-3 text-lg mt-0.5">■</span>
                <span className="font-light leading-relaxed">Defesa Estratégica em Reclamações Trabalhistas.</span>
              </li>
              <li className="flex items-start text-cs-iceWhite/90">
                <span className="text-cs-goldDark mr-3 text-lg mt-0.5">■</span>
                <span className="font-light leading-relaxed">Consultoria Preventiva para mitigação de passivos.</span>
              </li>
              <li className="flex items-start text-cs-iceWhite/90">
                <span className="text-cs-goldDark mr-3 text-lg mt-0.5">■</span>
                <span className="font-light leading-relaxed">Auditoria Trabalhista completa.</span>
              </li>
              <li className="flex items-start text-cs-iceWhite/90">
                <span className="text-cs-goldDark mr-3 text-lg mt-0.5">■</span>
                <span className="font-light leading-relaxed">Jurídico Recorrente: Assessoria mensal para o RH e Diretoria.</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá,%20sou%20empresa%20e%20busco%20assessoria%20trabalhista.`, '_blank')}
              className="w-full border-2 border-cs-goldDark text-cs-goldDark hover:bg-cs-goldDark hover:text-cs-darkGreen font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm text-center"
            >
              Assessoria Empresarial
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};