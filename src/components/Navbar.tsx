import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 shadow-lg px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-black p-2 rounded">
          <span className="text-yellow-400 font-bold text-lg">MTN</span>
        </div>
        <span className="font-bold text-black text-xl">SafeRide Finder</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <a href="#home" className="text-black hover:text-gray-700 font-medium">Home</a>
        <a href="#about" className="text-black hover:text-gray-700 font-medium">About</a>
        <a href="#contact" className="text-black hover:text-gray-700 font-medium">Contact</a>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex border-black text-black hover:bg-black hover:text-yellow-400">
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