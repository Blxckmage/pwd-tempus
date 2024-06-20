import Image from "next/image";

export default function ProductHeader() {
  return (
    <div className="relative flex min-h-screen items-end justify-start">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/productheader.jpg"
          alt="Product Header"
          fill
          quality={100}
          className="object-cover object-center"
        />
      </div>

      <div className="z-10 mx-4 mb-4 text-left text-white">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
            Shop our collection of products.
          </h1>
        </div>
      </div>
    </div>
  );
}
