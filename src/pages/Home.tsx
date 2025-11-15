import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Menu, 
  User, 
  Search, 
  Navigation, 
  AlertCircle,
  MapPin,
  Clock,
  Car
} from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-card border-b border-border shadow-[var(--shadow-soft)] px-4 py-3 flex items-center gap-3 z-50">
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="w-5 h-5" />
        </Button>
        
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search for destination or pickup spot..."
            className="pl-10 bg-secondary border-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowDestination(true)}
          />
        </div>

        <Button variant="ghost" size="icon" className="shrink-0">
          <User className="w-5 h-5" />
        </Button>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Placeholder Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">MTN Campus Area</p>
              <p className="text-xs text-muted-foreground mt-1">Tap to explore nearby spots</p>
            </div>
          </div>

          {/* Simulated Taxi Spot Markers */}
          <div className="absolute top-1/3 left-1/4 animate-pulse-glow">
            <div className="bg-accent p-2 rounded-full shadow-[var(--shadow-medium)]">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/3 animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
            <div className="bg-accent p-2 rounded-full shadow-[var(--shadow-medium)]">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/2 animate-pulse-glow" style={{ animationDelay: "1s" }}>
            <div className="bg-accent p-2 rounded-full shadow-[var(--shadow-medium)]">
              <Car className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
        </div>

        {/* Bottom Sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border rounded-t-3xl shadow-[var(--shadow-medium)] animate-slide-up">
          {!showDestination ? (
            /* Initial State */
            <div className="p-6">
              <div className="flex flex-col gap-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => setShowDestination(true)}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Find My Ride
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/report")}>
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Report an Issue
                </Button>
              </div>
            </div>
          ) : (
            /* Destination Selection */
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4">Where are you going?</h3>
              
              {/* Recent Destinations */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">Recent</p>
                <div className="space-y-2">
                  {recentDestinations.map((dest, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{dest}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nearby Taxi Spots */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Suggested Pickup Points</p>
                <div className="space-y-3">
                  {taxiSpots.map((spot) => (
                    <Card key={spot.id} className="p-4 hover:shadow-[var(--shadow-medium)] transition-shadow cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{spot.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                        <Button variant={spot.active ? "safe" : "outline"} size="sm" onClick={() => navigate("/navigation")}>
                          Get Directions
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
