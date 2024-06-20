"use client";

import ProductItem from "@/components/product/ProductItem";

export default function ProductItems() {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-white px-4 py-20 text-black">
      <div className="container grid gap-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Our Products
          </h1>
          <p className="mx-auto mb-4 max-w-5xl text-xl">
            Check out our collection of products that are carefully curated to
            bring you the best quality at an affordable price.
          </p>
        </header>
        <ProductItem />
      </div>
    </div>
  );
}
