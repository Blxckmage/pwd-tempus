"use client";
import React, { useRef } from "react";
import DownButton from "./header/DownButton";
import Image from "next/image";

const Header: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    if (videoRef.current) {
      const value = window.scrollY;
      videoRef.current.style.transform = `translateY(${value * 0.5}px)`;
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-[-1] h-full w-full object-cover object-left"
      >
        <source src="/assets/header.webm" type="video/webm" />
      </video>
      <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
        <Image
          src="/assets/logo.svg"
          alt="Tempus Logo"
          loading="lazy"
          width={128 / 2}
          height={114 / 2}
        />
      </div>
      <div className="z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
        <h1 className="mb-6 text-4xl xl:text-5xl">Tempus</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span>Cutting-edge smartwatches meet</span>{" "}
          <span>timeless design</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-10 transition-all duration-1000">
        <DownButton />
      </div>
    </div>
  );
};

export default Header;
