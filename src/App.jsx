import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/How-It-Works";
import Privacy from "./components/Privacy";
import Product from "./components/Product";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="w-[95%] mx-auto">
        <Hero />
        <Product />
        <HowItWorks />
        <Download />
        <Privacy />
        <Footer />
      </main>
    </div>
  );
}
