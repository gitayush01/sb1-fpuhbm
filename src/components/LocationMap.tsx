import { MapPin } from 'lucide-react';

const KL_UNIVERSITY_COORDS = "17.3254,78.5784"; // KL University Aziz Nagar coordinates
const AZIZ_NAGAR_COORDS = "17.3254,78.5784"; // KL University Aziz Nagar coordinates

export default function LocationMap() {
  const openInGoogleMaps = (location: string, coords: string) => {
    if (location === "KL University Aziz Nagar") {
      window.open("https://maps.app.goo.gl/VqJaejqKqbvLLkSR7", '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${coords}`, '_blank');
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Disposal Units</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our smart disposal units are conveniently located throughout the city. Find the nearest one to start earning rewards.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4107995620894!2d78.57588237485235!3d17.325399583697036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91825cc5bcb7%3A0x1f2c1c85799b9e3f!2sKL%20University%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1710901234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-4">
              <LocationButton 
                name="KL University Aziz Nagar" 
                count={6} 
                onClick={() => openInGoogleMaps("KL University Aziz Nagar", AZIZ_NAGAR_COORDS)}
              />
              <LocationButton name="City Center" count={5} />
              <LocationButton name="Shopping Mall" count={3} />
              <LocationButton name="Train Station" count={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationButton({ 
  name, 
  count, 
  onClick 
}: { 
  name: string; 
  count: number;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className="inline-flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors"
    >
      <MapPin className="h-4 w-4 text-green-600" />
      <span>{name}</span>
      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-sm">
        {count}
      </span>
    </button>
  );
}