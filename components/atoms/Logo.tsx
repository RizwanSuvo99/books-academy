import React from "react";

interface LogoProps {
  src: string;
  alt: string;
  size?: string; // optional, default: h-10 w-10
}

const Logo: React.FC<LogoProps> = ({ src, alt, size = "h-10 w-10" }) => {
  return <img src={src} alt={alt} className={`${size} object-contain`} />;
};

export default Logo;
