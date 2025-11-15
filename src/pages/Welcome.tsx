import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-welcome.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="SafeRide Finder - Your Safe Journey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Logo / Brand */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="bg-primary p-4 rounded-2xl shadow-[var(--shadow-glow)] animate-pulse-glow">
              <Shield className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            SafeRide Finder
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your Safe Journey Starts Here
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-card-foreground">Find Nearest Safe Spots</h3>
              <p className="text-sm text-muted-foreground">Locate verified taxi ranks instantly</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <Shield className="w-8 h-8 text-safe mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-card-foreground">Secure Directions</h3>
              <p className="text-sm text-muted-foreground">Walk safely with guided routes</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-card-foreground">Community Updates</h3>
              <p className="text-sm text-muted-foreground">Real-time safety information</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/home")}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 bg-card/50 backdrop-blur-sm"
              onClick={() => navigate("/home")}
            >
              Skip for Now
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/home")}
              className="text-primary hover:underline font-medium"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
