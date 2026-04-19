import { WhatsAppButton } from '../components/WhatsappButton';

export const CannabisLaw = () => {
  const areas = [
    "Habeas Corpus para cultivo medicinal",
    "Regularização junto à ANVISA",
    "Assessoria para Importação",
    "Apoio a Pacientes e Associações",
    "Defesa técnica especializada"
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold text-green-900 mb-6 border-b-2 border-yellow-500 pb-4">Direito Canábico</h1>
      <ul className="space-y-4 mb-12 text-lg">
        {areas.map((area, index) => (
          <li key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
            <span className="text-green-600 mr-3 text-xl">🌿</span> {area}
          </li>
        ))}
      </ul>
      <WhatsAppButton text="Consultoria em Direito Canábico" phoneNumber="5521999881812" customMessage="Olá, preciso de assessoria em Direito Canábico." />
    </div>
  );
};