import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  RiProgress1Line,
  RiProgress8Line,
  RiProgress6Line,
  RiProgress7Line,
  RiProgress4Line,
} from "react-icons/ri";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideProps,
} from "lucide-react";
import { IoIosCloseCircle } from "react-icons/io";
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
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: RiProgress1Line,
  },
  {
    value: "halfly done",
    label: "Halfly Done",
    icon: RiProgress4Line,
  },
  {
    value: "conflict",
    label: "Conflict",
    icon: RiProgress6Line,
  },
  {
    value: "complete",
    label: "Completed",
    icon: RiProgress7Line,
  },
  {
    value: "review",
    label: "In Review",
    icon: RiProgress7Line,
  },
  {
    value: "done",
    label: "Done",
    icon: RiProgress8Line,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: IoIosCloseCircle,
  },
];

interface StatusxDemoProps {
  value: string;
  onChange: (value: string) => void;
}

export function StatusxDemo({ value, onChange }: StatusxDemoProps) {
  const [open, setOpen] = useState(false);

  const getIconClassName = (
    icon:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      | IconType
  ) => {
    switch (icon) {
      case RiProgress8Line:
        return "text-done";
      case RiProgress6Line:
        return "text-bug";
      case RiProgress1Line:
        return "text-inprogress";
      case RiProgress4Line:
        return "text-inprogress";
      case RiProgress7Line:
        return "text-improvement";
      default:
        return "";
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="h-10 w-full justify-between rounded-lg border border-border font-thin"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Status"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <Command>
          <CommandInput placeholder="Search status..." className="h-9" />
          <CommandEmpty>No status found.</CommandEmpty>
          <CommandList>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                className="hover:bg-hoverColor flex items-center gap-2"
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <framework.icon
                  className={`${getIconClassName(
                    framework.icon
                  )} mr-2 h-4 w-4 shrink-0`}
                />
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
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
