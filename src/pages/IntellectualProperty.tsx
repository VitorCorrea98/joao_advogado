import { WhatsAppButton } from '../components/WhatsappButton';

export const IntellectualProperty = () => {
  const areas = [
    "Registro de marca (INPI)",
    "Direito autoral",
    "Proteção de conteúdo digital",
    "Contratos artísticos",
    "Licenciamento de marca",
    "Defesa de propriedade intelectual"
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-green-900 mb-6 border-b-2 border-yellow-500 pb-4">Direito Autoral e Propriedade Intelectual</h1>
      <ul className="space-y-4 mb-12 text-lg">
        {areas.map((area, index) => (
          <li key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <span className="text-yellow-500 mr-3 text-xl">©️</span> {area}
          </li>
        ))}
      </ul>
      <WhatsAppButton text="Proteger minha marca ou obra" phoneNumber="5521999881812" customMessage="Olá, preciso de assessoria para registro de marca/direito autoral." />
    </div>
  );
};