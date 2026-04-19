import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

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
      <header className="bg-cs-darkGreen text-cs-cream sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-wider flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <span className="bg-cs-goldDark text-cs-cream px-3 py-1 rounded-sm shadow-sm">CS</span>
            <span className="hidden sm:block">Cândido Silva</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 font-medium text-sm tracking-wide">
            <Link to="/" className="hover:text-cs-goldDark transition-colors duration-300">INÍCIO</Link>
            <Link to="/trabalhista" className="hover:text-cs-goldDark transition-colors duration-300">TRABALHISTA & PREVIDENCIÁRIO</Link>
            <Link to="/canabico" className="hover:text-cs-goldDark transition-colors duration-300">DIREITO CANÁBICO</Link>
            <Link to="/autoral" className="hover:text-cs-goldDark transition-colors duration-300">PROPRIEDADE INTELECTUAL</Link>
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
            <Link to="/canabico" className="hover:text-cs-goldDark transition-colors">Direito Canábico</Link>
            <Link to="/autoral" className="hover:text-cs-goldDark transition-colors">Propriedade Intelectual</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer Premium */}
      <footer className="bg-cs-darkGreen text-cs-cream py-16 border-t-4 border-cs-goldDark">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-3xl font-serif font-bold mb-4 inline-block text-cs-goldDark">
              CS Advocacia
            </Link>
            <p className="text-sm opacity-90 leading-relaxed font-light">
              Assessoria Jurídica de Excelência.<br />
              Atuação premium com foco em resultados, segurança jurídica e atendimento humanizado.
            </p>
          </div>
          <div>
            <h4 className="text-cs-goldDark font-serif text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-3 opacity-90 font-light">
              <li className="flex items-center gap-2"><span>📱</span> (21) 99988-1812</li>
              <li className="flex items-center gap-2"><span>📸</span> @candidosilva.adv</li>
              <li className="flex items-center gap-2"><span>✉️</span> contato@candidosilvaadvocacia.com.br</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cs-goldDark font-serif text-xl font-bold mb-6">Localização</h4>
            <p className="opacity-90 font-light leading-relaxed">
              Atendimento presencial em Rio de Janeiro e assessoria digital em todo o território nacional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};