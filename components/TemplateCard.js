import Image from 'next/image';

const TemplateCard = ({ template, setHovered, hovered }) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg transition-all duration-300 transform 
        ${hovered === template.id ? 'bg-yellow-100 scale-105' : 'bg-white'}
      `}
      onMouseEnter={() => setHovered(template.id)}
      onMouseLeave={() => setHovered(null)}
      role="article"
      aria-labelledby={`template-${template.id}`}
      aria-describedby={`template-desc-${template.id}`}
    >
      {/* Optimisation de l'image avec alt text significatif */}
      <Image
        src={template.image}
        alt={`${template.name} - image`}
        width={300}
        height={200}
        className="rounded-lg mb-4"
        quality={75}
      />
      
      {/* Titre accessible */}
      <h3 id={`template-${template.id}`} className="text-xl font-bold">
        {template.name}
      </h3>

      {/* Description avec un id pour l'accessibilité */}
      <p id={`template-desc-${template.id}`} className="text-black-900 mt-2">
        {template.description}
      </p>
    </div>
  );
};

export default TemplateCard;
