"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { client } from "@/lib/contentful";

type ImageFields = {
  file: {
    url: string;
  };
};

type ProductFields = {
  productName: string;
  productPrice: number;
  productImage: {
    fields: ImageFields;
  };
};

type Product = {
  id: string;
  fields: ProductFields;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const entries = await client.getEntries({
        content_type: "product",
        order: ["-sys.createdAt"],
      });
      setProducts(entries.items as unknown as Product[]);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black px-4 py-20 text-white">
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
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const { fields } = product;
              return (
                <article
                  key={product.id}
                  className="transform overflow-hidden border-2 border-white bg-black shadow-lg transition-transform"
                >
                  <Image
                    src={`https:${fields.productImage.fields.file.url}`}
                    alt={fields.productName}
                    width={1920}
                    height={1080}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white">
                      {fields.productName}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-white">
                      {fields.productPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    <Button variant="secondary" className="mt-4">
                      Buy now
                    </Button>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export default Products;
