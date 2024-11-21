import { Recycle, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">EcoField</span>
            </div>
            <p className="text-gray-400">
              Making the world cleaner, one package at a time.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-green-500 transition-colors">How It Works</a></li>
              <li><a href="#locations" className="hover:text-green-500 transition-colors">Locations</a></li>
              <li><a href="#rewards" className="hover:text-green-500 transition-colors">Rewards</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Green Street</li>
              <li>Eco City, EC 12345</li>
              <li>contact@ecofield.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Mail className="h-5 w-5" />} href="#" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoField. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
    >
      {icon}
    </a>
  );
}