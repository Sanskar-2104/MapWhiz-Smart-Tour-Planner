import { MapPin, Clock, Navigation, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Place {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  startTime: string;
  endTime: string;
  order: number;
}

interface PlaceCardProps {
  place: Place;
  index: number;
}

export const PlaceCard = ({ place, index }: PlaceCardProps) => {
  const handleDirections = () => {
    const url = `https://www.google.com/maps/search/?api=&query=${place.latitude},${place.longitude}`;
    window.open(url, "_blank");
  };

  const handleDetails = () => {
    toast.info("Place Details", {
      description: `${place.name} - More details coming soon!`,
    });
  };

  return (
    <div
      className="backdrop-blur-glass bg-gradient-card rounded-xl border border-border/50 p-6 hover:scale-102 hover:shadow-glow-accent transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header with place number and time */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow-primary">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {place.name}
            </h3>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm mt-1">
              <Clock className="w-4 h-4" />
              <span>
                {place.startTime} - {place.endTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">{place.description}</p>

      {/* Coordinates */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 p-3 rounded-lg bg-muted/20">
        <MapPin className="w-4 h-4 text-accent" />
        <span className="font-mono">
          {place.latitude.toFixed(4)}, {place.longitude.toFixed(4)}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleDirections}
          className="flex-1 bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300"
          variant="outline"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Directions
        </Button>
        <Button
          onClick={handleDetails}
          className="flex-1 bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300"
          variant="outline"
        >
          <Info className="w-4 h-4 mr-2" />
          Details
        </Button>
      </div>

      {/* Connecting line for next place */}
      {index < 3 && (
        <div className="flex justify-center mt-6">
          <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent"></div>
        </div>
      )}
    </div>
  );
};
