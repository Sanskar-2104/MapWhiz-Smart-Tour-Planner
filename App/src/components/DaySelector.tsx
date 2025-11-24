import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Day {
  dayIndex: number;
  date: string;
  notes: string;
}

interface DaySelectorProps {
  days: Day[];
  selectedDay: number;
  onSelectDay: (dayIndex: number) => void;
}

export const DaySelector = ({ days, selectedDay, onSelectDay }: DaySelectorProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="backdrop-blur-glass bg-gradient-card rounded-2xl border border-border/50 p-6 shadow-xl animate-slide-in">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Trip Overview</h2>
      </div>

      <div className="space-y-2">
        {days.map((day) => (
          <button
            key={day.dayIndex}
            onClick={() => onSelectDay(day.dayIndex)}
            className={cn(
              "w-full text-left p-4 rounded-xl transition-all duration-300 group",
              selectedDay === day.dayIndex
                ? "bg-gradient-primary text-primary-foreground shadow-glow-primary scale-105"
                : "bg-muted/30 hover:bg-muted/50 text-foreground hover:scale-102"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg">Day {day.dayIndex}</span>
              <span className="text-sm opacity-80">{formatDate(day.date)}</span>
            </div>
            <p
              className={cn(
                "text-sm line-clamp-2 transition-opacity",
                selectedDay === day.dayIndex ? "opacity-90" : "opacity-60 group-hover:opacity-80"
              )}
            >
              {day.notes}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
