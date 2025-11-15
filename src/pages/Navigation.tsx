import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Share2, 
  Navigation as NavigationIcon,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Clock
} from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    { instruction: "Head north on Campus Drive", distance: "100m", warning: null },
    { instruction: "Turn left onto Innovation Road", distance: "150m", warning: null },
    { instruction: "Continue straight", distance: "50m", warning: "Dark area ahead - stay alert" },
    { instruction: "Arrive at MTN Main Gate Rank", distance: "0m", warning: null },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="bg-card border-b border-border shadow-[var(--shadow-soft)] px-4 py-3 flex items-center justify-between z-50">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate("/home")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        <div className="text-center flex-1">
          <h2 className="font-semibold">To MTN Main Gate Rank</h2>
          <p className="text-xs text-muted-foreground">300m • 4 min walk</p>
        </div>

        <Button variant="ghost" size="icon">
          <Share2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Simulated Map with Route */}
        <div className="absolute inset-0 bg-gradient-to-br from-safe/5 via-background to-primary/5">
          {/* Route Path Visualization */}
          <svg className="absolute inset-0 w-full h-full" style={{ filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.3))" }}>
            <path
              d="M 100 500 Q 150 400, 200 350 T 300 250 T 400 150"
              stroke="hsl(var(--safe))"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset="0"
              className="animate-pulse"
            />
          </svg>

          {/* Current Position Marker */}
          <div className="absolute bottom-1/3 left-1/4 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" style={{ width: "40px", height: "40px" }} />
              <div className="relative bg-primary p-3 rounded-full shadow-[var(--shadow-glow)]">
                <NavigationIcon className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Destination Marker */}
          <div className="absolute top-1/4 right-1/3">
            <div className="bg-accent p-3 rounded-full shadow-[var(--shadow-medium)] animate-pulse-glow">
              <ShieldCheck className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>

          {/* Hazard Warning on Route */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-red-500 p-2 rounded-lg shadow-lg flex items-center gap-2 text-xs text-white">
              <AlertTriangle className="w-4 h-4" />
              <span>Dark Patch</span>
            </div>
          </div>

          {/* Safety Status Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-md flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Safe Route Active</span>
            </div>
          </div>

          {/* ETA Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white text-black px-3 py-2 rounded-lg shadow-md border-2 border-yellow-400 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">3 min remaining</span>
            </div>
          </div>
        </div>

        {/* Navigation Instructions Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-yellow-400 rounded-t-3xl shadow-lg p-6">
          <div className="mb-6">
            {steps[currentStep] && (
              <>
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-primary p-3 rounded-full shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">
                      {steps[currentStep].instruction}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {steps[currentStep].distance}
                    </p>
                  </div>
                </div>

                {steps[currentStep].warning && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <p className="text-sm font-medium text-red-700">
                        {steps[currentStep].warning}
                      </p>
                    </div>
                  </div>
                )}

                {steps[currentStep + 1] && (
                  <p className="text-sm text-muted-foreground">
                    Then: {steps[currentStep + 1].instruction}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate("/report")}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Issue
            </Button>
            <Button 
              variant="destructive" 
              className="px-6"
            >
              <AlertTriangle className="w-5 h-5" />
            </Button>
          </div>

          {/* Demo Controls */}
          <div className="mt-4 pt-4 border-t border-border flex gap-2">
            <Button 
              variant="secondary" 
              size="sm"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            >
              Prev Step
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              disabled={currentStep === steps.length - 1}
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            >
              Next Step
            </Button>
            <span className="ml-auto text-xs text-muted-foreground self-center">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
