import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-400 p-1 rounded">
              <span className="text-black font-bold text-sm">MTN</span>
            </div>
            <span className="font-bold">SafeRide Finder</span>
          </div>
          <p className="text-gray-400 text-sm">Making transport safer for everyone in Gauteng townships.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#safety" className="hover:text-yellow-400">Safety Tips</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#disclaimer" className="hover:text-yellow-400">Disclaimer</a></li>
            <li><a href="#cookies" className="hover:text-yellow-400">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <div className="space-y-2 text-sm text-gray-400">
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

      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 MTN SafeRide Finder. All rights reserved. | Powered by MTN South Africa</p>
      </div>
    </footer>
  );
};

export default Footer;