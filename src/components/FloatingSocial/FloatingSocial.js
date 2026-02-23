import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FloatingSocial = () => {
  return (
    <div className="floating-social">
      

      <a
        href="https://instagram.com/pravinktattoos"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          src="../../images/instagram-icon.png"
          alt="Instagram"
          width={50}
        />
      </a>

      <a
        href="https://wa.me/919921209571"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          src="../../images/whatsapp-icon.png"
          alt="WhatsApp"
          width={50}
        />
      </a>
    </div>
  );
};

export default FloatingSocial;
