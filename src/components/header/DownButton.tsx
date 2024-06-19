"use client";
import { ChevronDown } from "lucide-react";

const DownButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <ChevronDown
      onClick={handleScroll}
      size={40}
      className="animate-bounce text-white hover:cursor-pointer"
    />
  );
};

export default DownButton;
