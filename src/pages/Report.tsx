import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  MapPin,
  Car,
  Construction,
  AlertTriangle,
  Info,
  Camera
} from "lucide-react";

const Report = () => {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const issueTypes = [
    { id: "new-spot", label: "New Taxi Spot", icon: Car, color: "text-accent" },
    { id: "blocked", label: "Blocked Route", icon: Construction, color: "text-destructive" },
    { id: "safety", label: "Safety Hazard", icon: AlertTriangle, color: "text-destructive" },
    { id: "incorrect", label: "Incorrect Info", icon: Info, color: "text-primary" },
  ];

  const handleSubmit = () => {
    if (!selectedIssue || !description) {
      toast({
        title: "Missing Information",
        description: "Please select an issue type and provide a description",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Report Submitted",
      description: "Thank you for helping keep our community safe!",
    });

    setTimeout(() => navigate("/home"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border shadow-[var(--shadow-soft)] px-4 py-3 flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate("/home")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Report an Issue</h1>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">What would you like to report?</h2>
          <div className="grid grid-cols-2 gap-3">
            {issueTypes.map((issue) => {
              const Icon = issue.icon;
              const isSelected = selectedIssue === issue.id;
              
              return (
                <Card
                  key={issue.id}
                  className={`p-4 cursor-pointer transition-all ${
                    isSelected 
                      ? "border-primary shadow-[var(--shadow-medium)] bg-primary/5" 
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedIssue(issue.id)}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className={`p-3 rounded-full ${
                      isSelected ? "bg-primary/20" : "bg-secondary"
                    }`}>
                      <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : issue.color}`} />
                    </div>
                    <span className="text-sm font-medium">{issue.label}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {selectedIssue && (
          <div className="animate-slide-up space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Describe the issue
              </label>
              <Textarea
                placeholder="Please provide details about what you observed..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Location
              </label>
              <div className="bg-secondary rounded-lg p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="font-medium">Current Location</p>
                  <p className="text-xs text-muted-foreground">MTN Campus Area</p>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>

            <div>
              <Button variant="outline" className="w-full">
                <Camera className="w-4 h-4 mr-2" />
                Add Photo (Optional)
              </Button>
            </div>

            <div className="pt-4 flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate("/home")}
              >
                Cancel
              </Button>
              <Button 
                variant="hero" 
                className="flex-1"
                onClick={handleSubmit}
              >
                Submit Report
              </Button>
            </div>
          </div>
        )}

        {/* Info Box */}
        <Card className="bg-primary/5 border-primary/30 p-4">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-foreground mb-1">Community-Powered Safety</p>
              <p className="text-muted-foreground">
                Your reports help keep everyone safe. All submissions are reviewed to ensure accuracy.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Report;
