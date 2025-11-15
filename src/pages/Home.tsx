import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  Navigation, 
  AlertCircle,
  MapPin,
  Clock,
  Car,
  Shield,
  Users,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-welcome.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDestination, setShowDestination] = useState(false);

  const taxiSpots = [
    { id: 1, name: "MTN Main Gate Rank", distance: "300m", walkTime: "4 min", active: true },
    { id: 2, name: "Bus Stop C Pickup", distance: "450m", walkTime: "6 min", active: true },
    { id: 3, name: "Innovation Road Stop", distance: "800m", walkTime: "10 min", active: false },
  ];

  const recentDestinations = [
    "Home - Sandton",
    "Work - Rosebank",
    "Shopping Centre",
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Busy MTN Taxi Rank Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Busy MTN Taxi Rank" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Safe <span className="text-orange-400">Transport</span> in Your Kasi
            </h1>
            <p className="text-xl mb-6">Community-powered safe route finder for Gauteng townships</p>
            <div className="flex gap-4">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8">
                <Navigation className="w-5 h-5 mr-2" />
                Find My Ride
              </Button>
              <Button variant="outline" className="border-cream text-cream hover:bg-cream hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

        {/* Features Section */}
        <div className="py-16 px-6 bg-gray-50/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SafeRide Finder?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Routes</h3>
              <p className="text-gray-600">Community-verified safe walking paths to transport hubs</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Powered</h3>
              <p className="text-gray-600">Real-time updates from your neighbors and local community</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Quick and reliable directions when you need them most</p>
            </div>
          </div>
        </div>
      </div>

        {/* Search Section */}
        <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Find Your Safe Route Now</h3>
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Where do you want to go? (e.g., Sandton, Rosebank, Mall)"
                className="pl-12 py-3 text-lg border-2 border-yellow-400 focus:border-yellow-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDestination(true)}
              />
            </div>

            {showDestination && (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-3">Popular Destinations</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {recentDestinations.map((dest, idx) => (
                      <button
                        key={idx}
                        className="p-3 bg-orange-100 hover:bg-yellow-200 rounded-lg text-sm font-medium transition-colors"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3">Nearby Safe Pickup Points</p>
                  <div className="space-y-3">
                    {taxiSpots.map((spot) => (
                      <Card key={spot.id} className="p-4 border-l-4 border-l-yellow-400">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{spot.name}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {spot.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {spot.walkTime} walk
                              </span>
                            </div>
                          </div>
                          <Button 
                            className="bg-yellow-400 text-black hover:bg-yellow-500" 
                            size="sm" 
                            onClick={() => navigate("/navigation")}
                          >
                            Get Directions
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <Button 
                className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                onClick={() => setShowDestination(true)}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Find Safe Route
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-red-400 text-red-600 hover:bg-red-50" 
                onClick={() => navigate("/report")}
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                Report Issue
              </Button>
            </div>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
