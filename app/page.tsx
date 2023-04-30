import Banner from "@/components/input/Banner";
import getProducts from "./actions/getProducts";
import ListingCard from "@/components/input/ListingCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mt-10 flex flex-col justify-center items-center  overflow-x-hidden overflow-y-auto">
      {/* banner */}
      <Banner />

      {/* products */}
      <section
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {products &&
          products.map((product) => <ListingCard product={product} />)}
      </section>
    </main>
  );
}
