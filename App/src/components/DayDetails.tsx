import { PlaceCard } from "./PlaceCard";
import { Sparkles } from "lucide-react";

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

interface Day {
  dayIndex: number;
  date: string;
  notes: string;
  places: Place[];
}

interface DayDetailsProps {
  day: Day;
}

export const DayDetails = ({ day }: DayDetailsProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Day header */}
      <div className="backdrop-blur-glass bg-gradient-card rounded-2xl border border-border/50 p-6 shadow-xl">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-gradient-primary shadow-glow-primary animate-float">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Day {day.dayIndex}
            </h2>
            <p className="text-accent text-sm sm:text-base font-medium mb-3">
              {formatDate(day.date)}
            </p>
            <p className="text-muted-foreground leading-relaxed">{day.notes}</p>
          </div>
        </div>
      </div>

      {/* Places list */}
      <div className="space-y-4">
        {day.places
          .sort((a, b) => a.order - b.order)
          .map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
      </div>
    </div>
  );
};
