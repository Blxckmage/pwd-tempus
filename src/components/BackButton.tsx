"use client";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BackButton = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div
      className={`fixed bottom-4 right-4 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <button
        className={`flex items-center rounded-md bg-zinc-900 px-4 py-2 text-white shadow-md transition-opacity duration-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 ${isVisible ? "opacity-100" : "opacity-0"}`}
        onClick={goBack}
        style={{ transitionDelay: isVisible ? "0.2s" : "0s" }} // Delay animation to give time for initial render
      >
        Go Back
        <Undo2 className="ml-2 inline-block h-5 w-5" />
      </button>
    </div>
  );
};

export default BackButton;
