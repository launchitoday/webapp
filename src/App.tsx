import { Header } from '@/components/Header';
import { Hero } from '@/sections/Hero';
import { FeaturedWork } from '@/sections/FeaturedWork';
import { Web3Services } from '@/sections/Web3Services';
import { Pricing } from '@/sections/Pricing';
import { Clients } from '@/sections/Clients';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <Web3Services />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
