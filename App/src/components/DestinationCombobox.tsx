// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import { cn } from "@/lib/utils";

// const CITIES = [
//   "New York",
//   "Paris",
//   "Tokyo",
//   "Singapore",
//   "Dubai",
//   "London",
//   "San Francisco",
//   "Barcelona",
//   "Rome",
//   "Sydney",
// ];

// interface DestinationComboboxProps {
//   value?: string;
//   onChange?: (value: string) => void;
// }

// export const DestinationCombobox: React.FC<DestinationComboboxProps> = ({
//   value,
//   onChange,
// }) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between"
//         >
//           {value ? value : "Select destination"}
//           <ChevronsUpDown className="opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//         <Command>
//           <CommandInput placeholder="Search cities..." />
//           <CommandEmpty>No city found.</CommandEmpty>
//           <CommandGroup>
//             {CITIES.map((city) => (
//               <CommandItem
//                 key={city}
//                 onSelect={() => {
//                   onChange?.(city);
//                   setOpen(false);
//                 }}
//               >
//                 <Check className={cn("mr-2", value === city ? "opacity-100" : "opacity-0")} />
//                 {city}
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };



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

interface DestinationComboboxProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const DestinationCombobox: React.FC<DestinationComboboxProps> = ({
  value,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = React.useState<string[]>([]);
  const [filtered, setFiltered] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch("/data/cities.json")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query: string) => {
    if (!query) return setFiltered(cities);

    const q = query.toLowerCase();
    setFiltered(cities.filter((c) => c.toLowerCase().startsWith(q)));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {value || "Select destination"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput
            placeholder="Search cities..."
            onValueChange={handleSearch}
          />
          <CommandEmpty>No city found.</CommandEmpty>
          <CommandGroup>
            {filtered.map((city) => (
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
