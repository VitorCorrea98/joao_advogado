import { WhatsAppButton } from '../components/WhatsappButton';

const PHONE_NUMBER = "5521999881812";

export const LaborLaw = () => {
  const employeeRights = [
    "Rescisão indireta", "Verbas rescisórias", "Horas extras", "FGTS",
    "Justa causa", "Acidente de trabalho", "Assédio moral", "Reconhecimento de vínculo",
    "Reversão de justa causa", "Estabilidade gestante", "INSS", "Aposentadoria", "Benefícios previdenciários"
  ];

  const employerDefense = [
    "Defesa em Reclamações Trabalhistas", "Consultoria preventiva",
    "Auditoria trabalhista", "Parceria com contadores", "Jurídico recorrente empresarial"
  ];

  return (
    <div className="flex flex-col bg-cs-cream min-h-screen">
      <section className="bg-cs-darkGreen text-cs-cream py-20 px-6 text-center border-b-[6px] border-cs-goldDark shadow-premium">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-cs-goldDark">
            A defesa dos seus direitos começa aqui.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-cs-iceWhite text-balance">
            Protegemos trabalhadores e orientamos empresas com excelência, discrição e estratégia impecável.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton text="Quero analisar meu caso" phoneNumber={PHONE_NUMBER} customMessage="Olá, preciso de ajuda com um caso Trabalhista/Previdenciário." />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Trabalhadores */}
        <div className="bg-white p-10 rounded-2xl shadow-premium border-t-[6px] border-cs-darkGreen flex flex-col h-full">
          <h2 className="text-3xl font-serif font-bold text-cs-darkGreen mb-8">Para Trabalhadores</h2>
          <ul className="space-y-4 mb-8 flex-grow">
            {employeeRights.map((item, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <span className="text-cs-goldDark mr-3 text-xl">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Empresas */}
        <div className="bg-[#F4F1E1] p-10 rounded-2xl shadow-premium border-t-[6px] border-cs-goldDark flex flex-col h-full">
          <h2 className="text-3xl font-serif font-bold text-cs-darkGreen mb-8">Para Empresas</h2>
          <ul className="space-y-4 mb-12 flex-grow">
            {employerDefense.map((item, index) => (
              <li key={index} className="flex items-center text-lg text-gray-700">
                <span className="text-cs-darkGreen mr-3 text-xl">■</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <WhatsAppButton text="Falar com especialista" phoneNumber={PHONE_NUMBER} customMessage="Olá, sou empresa e preciso de assessoria jurídica trabalhista." />
          </div>
        </div>
      </div>
    </div>
  );
};