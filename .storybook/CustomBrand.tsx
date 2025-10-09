import React from 'react';
import { cn } from '../src/utils/tailwind';

interface CustomBrandProps {
  brandImage: string;
  brandTitle: string;
}

const CustomBrand: React.FC<CustomBrandProps> = ({ brandImage, brandTitle }) => {
  return (
    <div className={cn("flex items-center")}>
      <img src={brandImage} alt={brandTitle} className="mr-space-sm h-5" />
      <span className="text-default font-semibold">{brandTitle}</span>
    </div>
  );
};

export default CustomBrand;