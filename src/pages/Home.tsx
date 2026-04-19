import heroVisual from '../assets/images/LogoVerdeMelhor.png';
import { PracticeAreaCard } from '../components/PracticeAreaCard';
import { WhatsAppButton } from '../components/WhatsappButton';

const PHONE_NUMBER = "5521999881812";

export const Home = () => {
  const differentiators = [
    "Atendimento rápido",
    "Estratégia personalizada",
    "Atuação preventiva e contenciosa",
    "Atendimento em todo o Brasil",
    "Escritório digital + presencial",
    "Foco em alta performance jurídica"
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 bg-cs-cream">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-6 text-center">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 shadow-premium rounded-2xl border border-cs-goldDark/20 overflow-hidden bg-white mx-auto transform transition-transform hover:scale-[1.01] duration-500">
            <img
              src={heroVisual}
              alt="Cândido Silva Advocacia - Assessoria Jurídica de Excelência"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          <div className="flex justify-center -mt-6 relative z-10">
            <WhatsAppButton
              text="Fale com um advogado agora"
              phoneNumber={PHONE_NUMBER}
            />
          </div>
        </div>
      </section>

      {/* Sobre o Escritório */}
      <section className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Sobre o Escritório
        </h2>
        <div className="w-20 h-1 bg-cs-goldDark mx-auto mb-8 rounded-full" />
        <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light text-cs-darkGreen/90 text-balance">
          Escritório com atuação estratégica, atendimento personalizado e foco em soluções jurídicas eficientes para pessoas físicas e empresas.
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-light text-cs-darkGreen/80">
          Atuação premium com foco em resultados, segurança jurídica e atendimento humanizado.
        </p>
      </section>

      {/* Áreas de Atuação */}
      <section className="container mx-auto px-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm border border-cs-goldDark/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nossas Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PracticeAreaCard title="Trabalhista e Previdenciário" path="/trabalhista" isMain={true} />
            <PracticeAreaCard title="Direito Canábico" path="/canabico" />
            <PracticeAreaCard title="Direito Autoral e PI" path="/autoral" />
            <PracticeAreaCard title="Consultoria Empresarial" path="/trabalhista" />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Nossos Diferenciais
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-premium hover:shadow-premium-hover border border-cs-goldDark/30 rounded-xl font-medium text-cs-darkGreen transition-all duration-300 flex items-center justify-center text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};