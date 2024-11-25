import React from "react";

const Card = ({ title, content, bgColor, image, imagePosition, className }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 ${bgColor} ${className} ${
        imagePosition === "left" || imagePosition === "right" ? "flex-row" : "flex-col"
      } flex items-center relative`}
      style={{
        minHeight: "300px", 
        textAlign: imagePosition === "left" || imagePosition === "right" ? "left" : "center",
      }}
    >
      {/* Image à gauche */}
      {imagePosition === "left" && (
        <div className="mr-4 flex-shrink-0">
          <img
            src={image}
            alt={title}
            style={{
              width: "200px", // Taille augmentée pour l'image à gauche
              height: "200px",
              
            }}
          />
        </div>
      )}

      {/* Image en haut */}
      {imagePosition === "top" && (
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="object-contain mx-auto"
            style={{
              width: "200px", // Taille augmentée pour l'image en haut
              height: "200px",
              width:"100%",
              marginBottom:"20px",
              paddingBottom:"70px",
              
             
            }}
          />
        </div>
      )}

      {/* Contenu principal */}
      <div className={`flex-1 ${imagePosition === "left" || imagePosition === "right" ? "pl-4" : ""}`}>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {content && <p className="text-sm text-gray-700">{content}</p>}
      </div>

      {/* Image à droite */}
      {imagePosition === "right" && (
        <div className="ml-4 flex-shrink-0">
          <img
            src={image}
            alt={title}
            style={{
              width: "200px", // Taille augmentée pour l'image à droite
              height: "200px",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Image en bas */}
      {imagePosition === "bottom" && (
        <div
          className="mt-4"
          style={{
            marginTop: "20px",
          }}
        >
          <img
            src={image}
            alt={title}
            className="object-contain mx-auto"
            style={{
              width: "400px", // Taille augmentée pour l'image en bas
              height: "200px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
