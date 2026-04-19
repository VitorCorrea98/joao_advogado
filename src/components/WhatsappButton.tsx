import type { ActionButtonProps } from '../types';

export const WhatsAppButton = ({ text, phoneNumber, customMessage = "Olá, gostaria de falar com um advogado." }: ActionButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(customMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-cs-goldDark hover:bg-cs-darkGreen text-cs-cream font-bold py-4 px-8 rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center justify-center w-full sm:w-auto text-lg sm:text-xl border-2 border-transparent hover:border-cs-goldDark group"
      aria-label={text}
      type="button"
    >
      <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">📱</span>
      <span>{text}</span>
    </button>
  );
};