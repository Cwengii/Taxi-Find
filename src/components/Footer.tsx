import { MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/download (20).jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-cream py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImage} alt="SafeRide Finder" className="w-8 h-8 rounded-full" />
            <span className="font-bold">SafeRide Finder</span>
          </div>
          <p className="text-orange-300 text-sm">Making transport safer for everyone in Gauteng townships.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#safety" className="hover:text-orange-400">Safety Tips</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#terms" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#disclaimer" className="hover:text-orange-400">Disclaimer</a></li>
            <li><a href="#cookies" className="hover:text-orange-400">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <div className="space-y-2 text-sm text-orange-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>083 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>help@saferide.co.za</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Gauteng, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-orange-300">
        <p>&copy; 2024 SafeRide Finder. All rights reserved. | Making transport safer for everyone</p>
      </div>
    </footer>
  );
};

export default Footer;