import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  RiProgress1Line,
  RiProgress8Line,
  RiProgress6Line,
  RiProgress7Line,
  RiProgress4Line,
} from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { IconType } from "react-icons";

const frameworks = [
  {
    value: "improvement",
    label: "Improvement",
    icon: FaCircle,
  },
  {
    value: "bug",
    label: "Bug",
    icon: FaCircle,
  },
  {
    value: "feature",
    label: "Feature",
    icon: FaCircle,
  },
];

export function LabelsDemo({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (currentValue) => {
    onChange(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="h-10 w-full justify-between rounded-lg border border-border font-thin"
        >
          {value || "Labels"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <Command>
          <CommandInput placeholder="Search Labels..." className="h-9" />
          <CommandEmpty>No labels found.</CommandEmpty>
          <CommandList>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                className="hover:bg-hoverColor flex items-center gap-2"
                onSelect={handleSelect}
              >
                <framework.icon
                  className={`${
                    framework.value === "improvement" && "text-improvement"
                  } ${framework.value === "bug" && "text-bug"} ${
                    framework.value === "feature" && "text-feature"
                  } ml-2 mr-2 h-3 w-3 shrink-0`}
                />
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-3 w-3",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
