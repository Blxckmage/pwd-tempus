import { ChevronDown } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 h-full w-full object-cover object-left"
      >
        <source src="/assets/header.webm" type="video/webm" />
      </video>
      <div className="z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
        <h1 className="mb-6 text-4xl xl:text-5xl">Tempus</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span>Cutting-edge smartwatches meet</span>{" "}
          <span>timeless design</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-10 transition-all duration-1000">
        <ChevronDown size={40} className="animate-bounce text-white" />
      </div>
    </div>
  );
};

export default Header;
