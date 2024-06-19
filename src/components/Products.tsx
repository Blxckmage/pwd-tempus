import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "/assets/product_1.jpg",
      name: "Sleek Leather Backpack",
      price: "$99.99",
    },
    {
      id: 2,
      image: "/assets/product_1.jpg",
      name: "Vintage Typewriter",
      price: "$149.99",
    },
    {
      id: 3,
      image: "/assets/product_1.jpg",
      name: "Minimalist Desk Lamp",
      price: "$79.99",
    },
    {
      id: 4,
      image: "/assets/product_1.jpg",
      name: "Handcrafted Ceramic Mug",
      price: "$24.99",
    },
    {
      id: 5,
      image: "/assets/product_1.jpg",
      name: "Rustic Wood Cutting Board",
      price: "$39.99",
    },
    {
      id: 6,
      image: "/assets/product_1.jpg",
      name: "Elegant Glass Vase",
      price: "$59.99",
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black px-4 py-20 text-white">
      <div className="container grid gap-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Our Products
          </h2>
          <p className="mx-auto mb-4 max-w-5xl text-xl">
            Check out our collection of products that are carefully curated to
            bring you the best quality at an affordable price.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="transform overflow-hidden border-2 border-white bg-black shadow-lg transition-transform"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-medium text-white">
                  {product.price}
                </p>
                <Button variant="secondary" className="mt-4">
                  Buy now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
