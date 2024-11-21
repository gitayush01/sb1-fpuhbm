import { Recycle, Gift, Coins, MapPin, Package2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Package2 className="h-8 w-8 text-green-600" />}
            title="Dispose Waste"
            description="Place your packaging waste in our smart disposal units located across the city"
          />
          <FeatureCard 
            icon={<Recycle className="h-8 w-8 text-green-600" />}
            title="We Recycle"
            description="Your waste is properly sorted and recycled through our eco-friendly process"
          />
          <FeatureCard 
            icon={<Coins className="h-8 w-8 text-green-600" />}
            title="Earn Points"
            description="Get reward points for every item you dispose of responsibly"
          />
          <FeatureCard 
            icon={<Gift className="h-8 w-8 text-green-600" />}
            title="Claim Rewards"
            description="Redeem your points for exciting rewards from our partner brands"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}