import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  const [session, loading] = useSession();
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Sid-Amazon</title>
      </Head>

      <Header />
      <main className="max-w screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
      
  );
  console.log(context.query.id);

  return {
      props: {
          session,
          products,
      }
  }
  
}