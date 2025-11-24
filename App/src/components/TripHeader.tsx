import { MapPin, Calendar, DollarSign, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface TripHeaderProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  tripData: any;
}

export const TripHeader = ({
  title,
  destination,
  startDate,
  endDate,
  budget,
  tripData,
}: TripHeaderProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleShare = () => {
    toast.success("Link copied to clipboard!", {
      description: "Share this itinerary with your friends",
    });
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(tripData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${destination.toLowerCase()}-itinerary.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Itinerary exported!", {
      description: "JSON file downloaded successfully",
    });
  };

  return (
    <div className="backdrop-blur-glass bg-gradient-card rounded-2xl border border-border/50 p-6 sm:p-8 shadow-xl animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left side - Trip info */}
        <div className="space-y-4 flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
            {title}
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {/* Location */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm sm:text-base font-medium">{destination}</span>
            </div>

            {/* Dates */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-accent/10">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            </div>

            {/* Budget */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-secondary/10">
                <DollarSign className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm sm:text-base font-medium">
                ₹{budget.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex-1 sm:flex-none border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button
            onClick={handleExport}
            className="flex-1 sm:flex-none bg-gradient-primary text-primary-foreground shadow-glow-primary hover:scale-105 transition-transform duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Export JSON
          </Button>
        </div>
      </div>
    </div>
  );
};
