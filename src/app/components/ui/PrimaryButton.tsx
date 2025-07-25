import { ArrowRight } from "lucide-react";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  icon = true,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`flex items-center gap-2 px-6 py-2 border-2 border-black text-black font-medium rounded-3xl hover:bg-black hover:text-white transition-colors group ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={32}
          className="group-hover:translate-x-2 transition-transform duration-300"
        />
      )}
    </button>
  );
};

export default PrimaryButton;
