"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/lib/contentful";
import { Button } from "@/components/ui/button";

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

const ProductItem: React.FC = () => {
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
  }, [setProducts]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent" />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { fields } = product;
        return (
          <article
            key={product.id}
            className="transform overflow-hidden rounded-lg border-2 border-black bg-white shadow-lg transition-transform hover:shadow-xl"
          >
            <Image
              src={`https:${fields.productImage.fields.file.url}`}
              alt={fields.productName}
              width={1920}
              height={1080}
              className="h-64 w-full object-cover"
            />
            <div className="border-2 border-t-black p-6">
              <h2 className="text-xl font-semibold text-black">
                {fields.productName}
              </h2>
              <p className="mt-2 text-lg font-medium text-black">
                {fields.productPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <Button className="mt-4">Buy now</Button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductItem;
