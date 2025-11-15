import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/download (20).jpeg";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 shadow-lg px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logoImage} alt="SafeRide Finder" className="w-10 h-10 rounded-full" />
        <span className="font-bold text-black text-xl">SafeRide Finder</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <a href="#home" className="text-black hover:text-orange-500 font-medium">Home</a>
        <a href="#about" className="text-black hover:text-orange-500 font-medium">About</a>
        <a href="#contact" className="text-black hover:text-orange-500 font-medium">Contact</a>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex border-black text-black hover:bg-orange-500 hover:text-cream">
          <Phone className="w-4 h-4 mr-1" />
          Help
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-black">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;