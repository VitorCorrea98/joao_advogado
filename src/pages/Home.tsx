import { Link } from 'react-router-dom';
import fundoVisual from '../assets/images/FundoXadrezJoao.jpeg'; // Ou a versão sem fundo
import logoVisual from '../assets/images/LogoVerde.jpeg'; // Ou a versão sem fundo
import { WhatsAppButton } from '../components/WhatsappButton';

const PHONE_NUMBER = "5521999881812";

export const Home = () => {
  return (
    <div className="flex flex-col bg-cs-iceWhite">
      {/* 1. HERO SECTION (Impacto Visual) */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-cs-darkGreen overflow-hidden">
        {/* Placeholder para a Imagem de Fundo (Mármore/Escritório Moderno) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${fundoVisual})` }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <img src={logoVisual} alt="CS Logo" className="w-24 h-24 rounded-full shadow-2xl mb-8 border border-cs-goldDark/30 object-cover" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cs-goldDark mb-6 tracking-widest uppercase">
            Cândido Silva<br />Advocacia
          </h1>

          <p className="text-lg md:text-2xl font-light text-cs-iceWhite/90 tracking-wide mb-12 max-w-3xl">
            "Atuação estratégica, atendimento personalizado e excelência jurídica."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <WhatsAppButton text="Fale no WhatsApp" phoneNumber={PHONE_NUMBER} />
            <button
              type="button"
              className="px-8 py-4 border-2 border-cs-goldDark text-cs-goldDark hover:bg-cs-goldDark hover:text-cs-darkGreen font-bold rounded-xl transition-all duration-500 uppercase tracking-wider text-sm"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* 2. ÁREAS DE ATUAÇÃO (3 Cards Premium) */}
      <section className="py-24 px-6 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Especialidades</h2>
          <div className="w-12 h-1 bg-cs-goldDark mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 p-14 gap-8">
          {/* Card Trabalhista */}
          <Link to="/trabalhista" className="group flex flex-col bg-white rounded-sm shadow-premium hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-cs-goldDark/30 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800&auto=format&fit=crop" alt="Trabalhista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cs-goldDark transition-colors">Trabalho & Previdência</h3>
              <p className="text-cs-graphite font-light leading-relaxed mb-6">
                Atuação em reclamações trabalhistas, verbas rescisórias, reversão de justa causa, benefícios previdenciários e planejamento jurídico preventivo.
              </p>
              <span className="mt-auto text-sm uppercase tracking-widest text-cs-goldDark font-semibold">Descobrir Mais →</span>
            </div>
          </Link>

          {/* Card Canábico */}
          {/* <Link to="/canabico" className="group flex flex-col bg-white rounded-sm shadow-premium hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-cs-goldDark/30 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1603908846950-86ec1840e53a?q=80&w=800&auto=format&fit=crop" alt="Direito Canábico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply grayscale-[30%]" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cs-goldDark transition-colors">Direito Canábico</h3>
              <p className="text-cs-graphite font-light leading-relaxed mb-6">
                Habeas corpus para cultivo medicinal, acesso judicial ao tratamento, importação autorizada e defesa do direito à saúde.
              </p>
              <span className="mt-auto text-sm uppercase tracking-widest text-cs-goldDark font-semibold">Descobrir Mais →</span>
            </div>
          </Link>

          <Link to="/autoral" className="group flex flex-col bg-white rounded-sm shadow-premium hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-cs-goldDark/30 overflow-hidden">
            <div className="h-64 overflow-hidden bg-cs-darkGreen">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Propriedade Intelectual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cs-goldDark transition-colors">Propriedade Intelectual</h3>
              <p className="text-cs-graphite font-light leading-relaxed mb-6">
                Registro de marca, direito autoral, proteção patrimonial intelectual e segurança jurídica para criadores e empresas.
              </p>
              <span className="mt-auto text-sm uppercase tracking-widest text-cs-goldDark font-semibold">Descobrir Mais →</span>
            </div>
          </Link> */}
        </div>
      </section>

      {/* 3. SOBRE O ESCRITÓRIO (Gera Autoridade) */}
      <section className="py-24 bg-white border-y border-cs-goldDark/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">


            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nossa Essência</h2>
              <p className="text-xl leading-relaxed font-light text-cs-graphite mb-6 text-balance">
                Fundado com a proposta de oferecer uma advocacia moderna, estratégica e humanizada, o escritório atua com excelência técnica e atendimento próximo ao cliente.
              </p>
              <p className="text-xl leading-relaxed font-light text-cs-graphite text-balance">
                Buscamos incessantemente soluções que tragam eficácia, proteção e segurança jurídica máxima para pessoas e negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS (Luxo Silencioso) */}
      <section className="py-24 bg-cs-darkGreen text-cs-iceWhite px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-cs-goldDark">Diferenciais</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { title: "Atendimento Personalizado", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { title: "Atuação Estratégica", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Transparência Processual", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { title: "Escritório Digital e Presencial", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { title: "Foco Absoluto em Resultados", icon: "M13 10V3L4 14h7v7l9-11h-7z" }, { title: "Atuação Preventiva", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-cs-goldDark/50 flex items-center justify-center mb-6 group-hover:bg-cs-goldDark transition-colors duration-500">
                  <svg className="w-8 h-8 text-cs-goldDark group-hover:text-cs-darkGreen transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>{item.title}</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-serif text-cs-iceWhite">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};