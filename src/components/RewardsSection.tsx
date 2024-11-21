import { Gift, Coffee, ShoppingBag, Ticket } from 'lucide-react';

export default function RewardsSection() {
  return (
    <section className="py-20" id="rewards">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Rewards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Turn your eco-friendly actions into amazing rewards. The more you recycle, the more you earn!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RewardCard
            icon={<Coffee className="h-6 w-6" />}
            title="Free Coffee"
            points={100}
            description="Get a free coffee from participating cafes"
            color="bg-amber-500"
          />
          <RewardCard
            icon={<ShoppingBag className="h-6 w-6" />}
            title="Shopping Voucher"
            points={500}
            description="$50 shopping voucher at eco-friendly stores"
            color="bg-emerald-500"
          />
          <RewardCard
            icon={<Ticket className="h-6 w-6" />}
            title="Movie Tickets"
            points={300}
            description="Free movie tickets for two"
            color="bg-purple-500"
          />
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center">
            View All Rewards <Gift className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function RewardCard({ 
  icon, 
  title, 
  points, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  points: number; 
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
      <div className={`${color} text-white p-6 rounded-t-xl`}>
        <div className="flex items-center justify-between">
          {icon}
          <span className="font-semibold">{points} Points</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors">
          Redeem Now
        </button>
      </div>
    </div>
  );
}