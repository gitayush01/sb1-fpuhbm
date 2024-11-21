import { Recycle, Gift, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="text-xl font-bold">EcoField</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#locations">Locations</NavLink>
            <NavLink href="#rewards">Rewards</NavLink>
            <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Sign In
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 px-4 py-2">
          <nav className="flex flex-col space-y-2">
            <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
            <MobileNavLink href="#locations">Locations</MobileNavLink>
            <MobileNavLink href="#rewards">Rewards</MobileNavLink>
            <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold w-full">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-green-100 transition-colors">
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white py-2 block">
      {children}
    </a>
  );
}