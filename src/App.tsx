import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RewardsSection from './components/RewardsSection';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <RewardsSection />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;