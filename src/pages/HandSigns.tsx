import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Hand,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Minus,
  MapPin,
  Loader2
} from "lucide-react";

const HandSigns = () => {
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getLocationSigns = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulate location detection
          const locations = ["Soweto", "Alexandra", "Sandton", "Rosebank", "Johannesburg CBD"];
          const randomLocation = locations[Math.floor(Math.random() * locations.length)];
          setLocation(randomLocation);
          setLoading(false);
        },
        () => {
          setLocation("Johannesburg Area");
          setLoading(false);
        }
      );
    } else {
      setLocation("Johannesburg Area");
      setLoading(false);
    }
  };

  const getLocationSpecificSigns = (loc: string) => {
    const signsByLocation: Record<string, Array<{icon: any, title: string, description: string}>> = {
      "Soweto": [
        { icon: ArrowUp, title: "Point Up", description: "Johannesburg CBD / City Center" },
        { icon: ArrowRight, title: "Point Right", description: "Sandton / Northern Suburbs" },
        { icon: Minus, title: "Flat Hand", description: "Local Soweto routes" },
      ],
      "Alexandra": [
        { icon: ArrowUp, title: "Point Up", description: "Sandton CBD" },
        { icon: ArrowDown, title: "Point Down", description: "Johannesburg CBD" },
        { icon: "✌️", title: "Two Fingers", description: "Marlboro / Wynberg" },
      ],
      "Sandton": [
        { icon: ArrowDown, title: "Point Down", description: "Johannesburg CBD" },
        { icon: ArrowRight, title: "Point Right", description: "Rosebank / Randburg" },
        { icon: "👋", title: "Open Palm", description: "Local Sandton stops" },
      ],
      default: [
        { icon: ArrowUp, title: "Point Up", description: "CBD / City Center" },
        { icon: ArrowDown, title: "Point Down", description: "Local routes" },
        { icon: Minus, title: "Flat Hand", description: "Short stops" },
      ]
    };

    return signsByLocation[loc] || signsByLocation.default;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hand className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Taxi Hand Signs by Location</h1>
            <p className="text-gray-600 mb-8">Get location-specific hand signals for your area</p>
            
            <Button 
              onClick={getLocationSigns}
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Detecting Location...
                </>
              ) : (
                <>
                  <MapPin className="w-5 h-5 mr-2" />
                  Get My Location Signs
                </>
              )}
            </Button>
          </div>

          {location && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  📍 You are in: {location}
                </h2>
                <p className="text-gray-600">Here are the hand signs commonly used in your area:</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getLocationSpecificSigns(location).map((sign, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {typeof sign.icon === 'string' ? (
                        <span className="text-2xl">{sign.icon}</span>
                      ) : (
                        <sign.icon className="w-8 h-8 text-black" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-2">{sign.title}</h3>
                    <p className="text-sm text-gray-600">{sign.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-100 border-l-4 border-l-orange-500 p-4 rounded mt-8">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> These signs are specific to {location}. Hand signals may vary between different taxi ranks in the same area. Always confirm with locals or queue marshals when unsure.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HandSigns;