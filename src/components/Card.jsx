import React from "react";

const Card = ({ title, content, bgColor, image, imagePosition, className }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 ${bgColor} ${className} flex flex-col items-center justify-between`}
      style={{
        minHeight: "250px", // Hauteur minimale
        textAlign: "center", // Centrer le texte
      }}
    >
      {imagePosition === "top" && (
        <div className="mb-4">
          <img src={image} alt={title} className="w-16 h-16 object-contain mx-auto" />
        </div>
      )}

      <h2 className="text-h1 font-semibold mb-2">{title}</h2>

      {content && <p className="text-body mb-4">{content}</p>}

      {imagePosition === "bottom" && (
        <div>
          <img src={image} alt={title} className="w-16 h-16 object-contain mx-auto" />
        </div>
      )}
    </div>
  );
};

export default Card;
