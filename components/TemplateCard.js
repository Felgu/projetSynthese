// components/TemplateCard.js
import Image from 'next/image';

const TemplateCard = ({ template, setHovered, hovered }) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform ${hovered === template.id ? 'bg-yellow-100' : 'bg-white'}`}
      onMouseEnter={() => setHovered(template.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <Image src={template.image} alt={template.name} width={300} height={200} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{template.name}</h3>
      <p className="text-gray-500 mt-2">{template.description}</p>
    </div>
  );
};

export default TemplateCard;
