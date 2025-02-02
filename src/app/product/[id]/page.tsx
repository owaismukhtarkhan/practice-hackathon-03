import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductDetailsClient from "./ProductDetailsClient";

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "products"]{_id}`);
  return products.map((product: { _id: string }) => ({ id: product._id }));
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]`,
    { id }
  );

  if (!product) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <ProductDetailsClient product={product} />
    </div>
  );
};

export default ProductDetails;
