import React from "react";

const Card = ({ title, content, bgColor, image, imagePosition, className }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 ${bgColor} ${className} ${
        imagePosition === "left" || imagePosition === "right" ? "flex-row" : "flex-col"
      } flex items-center justify-between relative`} // Ajout de `relative` pour permettre le positionnement absolu
      style={{
        minHeight: "250px", // Hauteur minimale
        textAlign: imagePosition === "left" || imagePosition === "right" ? "left" : "center", // alignement des images
      }}
    >
      {/* Images gauche */}
      {imagePosition === "left" && (
        <div className="mr-4 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-contain" //ajustement des images
          />
        </div>
      )}

      {/* Image haut */}
      {imagePosition === "top" && (
        <div
          className={`mb-4 ${
            className === "nth-card-6" ? "relative -translate-y-8" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-contain mx-auto" //ajustement des images
          />
        </div>
      )}

      {/* Contenu de la page */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        {content && <p className="text-base mb-4">{content}</p>}
      </div>

      {/* Images droite */}
      {imagePosition === "right" && (
        <div className="ml-4 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-contain" //ajustement des images
          />
        </div>
      )}

      {/* Image en bas */}
      {imagePosition === "bottom" && (
        <div>
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-contain mx-auto" //ajustement des images
          />
        </div>
      )}
    </div>
  );
};

export default Card;
