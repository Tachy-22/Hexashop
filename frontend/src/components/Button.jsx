/* eslint-disable react/prop-types */

import { useCallback } from "react";

const Button = ({ children, size, color, type, style, onClick }) => {
  let sizeClasses = "";
  let colorClasses = "";
  let typeClasses = "";

  // Apply size classes
  if (size === "small") {
    sizeClasses = "px-3 py-1 text-sm";
  } else if (size === "large") {
    sizeClasses = "px-6 py-3 text-lg";
  } else {
    sizeClasses = "px-4 py-2 text-base";
  }

  // Apply color classes
  if (color === "primary") {
    colorClasses = "bg-blue-500 text-white hover:bg-blue-600";
  } else if (color === "secondary") {
    colorClasses = "bg-gray-400 text-black hover:bg-gray-500";
  } else {
    colorClasses = color;
  }

  // Apply type classes (outline or solid)
  if (type === "outline") {
    typeClasses = "border border-black border-solid rounded-md hover:bg-black/10";
  } else {
    typeClasses = "rounded-md";
  }

  const buttonClasses = `inline-block ${sizeClasses} ${colorClasses} ${typeClasses} ${style}`;

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
