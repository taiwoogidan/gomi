import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/How-It-Works";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="w-[90%] mx-auto">
        <Hero />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
}
