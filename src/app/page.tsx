import Header from "@/components/Header";
import AboutUs from "@/components/About";
import ProductPage from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <ProductPage />
      <Testimonial />
      <Footer />
    </main>
  );
}
