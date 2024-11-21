import { ArrowRight, Package2 } from 'lucide-react';
import { useState } from 'react';
import SignUpModal from './SignUpModal';

export default function Hero() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Waste Into Rewards
            </h1>
            <p className="text-xl mb-8 text-green-50">
              Join our mission to reduce packaging waste. Dispose responsibly and earn exciting rewards for your eco-friendly actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsSignUpModalOpen(true)}
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" 
                alt="Recycling Process" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setIsSignUpModalOpen(false)} 
      />
    </div>
  );
}