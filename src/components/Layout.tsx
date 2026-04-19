import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { WhatsAppButton } from './WhatsappButton';

export const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cs-cream">
      {/* Header Premium */}
      <header className="bg-cs-darkGreen text-cs-iceWhite sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            aria-label="Cândido Silva Advocacia"
            className="text-2xl font-serif font-bold tracking-wider flex items-center transition-transform hover:scale-[1.02]"
          >
            {/* MOBILE: Mostra o "CS" / Esconde no Desktop (sm:hidden) */}
            <span className="bg-cs-goldDark text-cs-cream px-3 py-1 rounded-sm shadow-sm sm:hidden">
              CS
            </span>

            {/* DESKTOP: Esconde no Mobile (hidden) / Mostra no Desktop (sm:block) */}
            <span className="hidden sm:block font-serif font-bold">
              Cândido Silva
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 font-medium text-sm tracking-wide">
            <Link to="/trabalhista" className="hover:text-cs-goldDark transition-colors duration-300">DIREITO DO TRABALHO & PREVIDENCIÁRIO</Link>
            {/* <Link to="/canabico" className="hover:text-cs-goldDark transition-colors duration-300">DIREITO CANÁBICO</Link>
            <Link to="/autoral" className="hover:text-cs-goldDark transition-colors duration-300">PROPRIEDADE INTELECTUAL</Link> */}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-cs-goldDark p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col px-6 py-4 space-y-4 bg-cs-darkGreen/95 backdrop-blur-sm border-t border-cs-darkGreen">
            <Link to="/" className="hover:text-cs-goldDark transition-colors">Início</Link>
            <Link to="/trabalhista" className="hover:text-cs-goldDark transition-colors">Trabalhista & Previdenciário</Link>
            {/* <Link to="/canabico" className="hover:text-cs-goldDark transition-colors">Direito Canábico</Link>
            <Link to="/autoral" className="hover:text-cs-goldDark transition-colors">Propriedade Intelectual</Link> */}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer Premium */}

      <footer id="contato" className="bg-cs-darkGreen text-cs-iceWhite pt-20 pb-10 border-t-[8px] border-cs-goldDark">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

          {/* Coluna 1: Marca e Intro */}
          <div className="flex flex-col">
            <span className="text-3xl font-serif font-bold text-cs-goldDark mb-6">Cândido Silva<br />Advocacia</span>
            <p className="font-light text-cs-iceWhite/80 leading-relaxed mb-8 max-w-sm">
              Atendimento premium e soluções jurídicas estratégicas com foco na segurança do cliente.
            </p>
            <WhatsAppButton text="Atendimento Imediato" phoneNumber="5521999881812" />
          </div>

          {/* Coluna 2: Contatos Rápidos */}
          <div>
            <h4 className="text-xl font-serif font-bold text-cs-goldDark mb-6 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 font-light opacity-90">
              <li className="flex items-center gap-3">
                <span className="text-cs-goldDark text-xl">📱</span>
                <a href="https://wa.me/5521999881812" className="hover:text-cs-goldDark transition-colors">(21) 99988-1812</a>
              </li>
              {/* <li className="flex items-center gap-3">
                <span className="text-cs-goldDark text-xl">📸</span>
                <a href="https://instagram.com/candidosilva.adv" target="_blank" rel="noreferrer" className="hover:text-cs-goldDark transition-colors">@candidosilva.adv</a>
              </li> */}
              <li className="flex items-center gap-3">
                <span className="text-cs-goldDark text-xl">✉️</span>
                <a href="mailto:advocaciacandidosilva@gmail.com" className="hover:text-cs-goldDark transition-colors">advocaciacandidosilva@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-cs-goldDark/20">
                <span className="text-cs-goldDark text-xl mt-1">📍</span>
                <span className="leading-relaxed">Tv. do Paço, 23 sala 805 - Centro, Rio de Janeiro - RJ, 20010-170</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Mapa Local */}
          <div className="w-full h-72 bg-cs-graphite/50 rounded-sm border border-cs-goldDark/20 overflow-hidden relative group">
            {/* O iframe abaixo usa a API gratuita de incorporação do Maps.
              As classes CSS garantem que ele fique em preto e branco (grayscale) 
              e volte a ficar colorido quando o usuário passar o mouse (group-hover:grayscale-0).
            */}
            <iframe
              src="https://maps.google.com/maps?q=Travessa%20do%20Pa%C3%A7o,%2023%20-%20Centro,%20Rio%20de%20Janeiro%20-%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório - Travessa do Paço, RJ"
              className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
            />
          </div>

        </div>

        <div className="container mx-auto px-6 border-t border-cs-iceWhite/10 pt-8 text-center text-sm font-light text-cs-iceWhite/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Cândido Silva Advocacia. Todos os direitos reservados.</p>

        </div>
      </footer>
    </div>
  );
};