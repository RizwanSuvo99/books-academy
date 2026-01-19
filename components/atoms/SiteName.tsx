import React from 'react';

interface SiteNameProps {
  name: string;
  className?: string;
}

const SiteName: React.FC<SiteNameProps> = ({ name, className = '' }) => {
  return <span className={`text-xl font-bold ${className}`}>{name}</span>;
};

export default SiteName;
