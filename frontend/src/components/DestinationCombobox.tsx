"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const CITIES = [
  "New York",
  "Paris",
  "Tokyo",
  "Singapore",
  "Dubai",
  "London",
  "San Francisco",
  "Barcelona",
  "Rome",
  "Sydney",
];

interface DestinationComboboxProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const DestinationCombobox: React.FC<DestinationComboboxProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value ? value : "Select destination"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search cities..." />
          <CommandEmpty>No city found.</CommandEmpty>
          <CommandGroup>
            {CITIES.map((city) => (
              <CommandItem
                key={city}
                onSelect={() => {
                  onChange?.(city);
                  setOpen(false);
                }}
              >
                <Check className={cn("mr-2", value === city ? "opacity-100" : "opacity-0")} />
                {city}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
