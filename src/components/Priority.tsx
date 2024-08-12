import * as React from "react";
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
import { RxDotsHorizontal } from "react-icons/rx";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Status = {
  value: string;
  label: string;
  icon: IconType;
};

const statuses: Status[] = [
  { value: "no priority", label: "No priority", icon: RxDotsHorizontal },
  { value: "urgent", label: "Urgent", icon: BsFillExclamationSquareFill },
  { value: "high", label: "High", icon: BiSignal4 },
  { value: "medium", label: "Medium", icon: BiSignal3 },
  { value: "low", label: "Low", icon: BiSignal2 },
];

export function Priority({ a }: { a: { priority: string } }) {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    statuses.find((status) => status.value === a.priority.toLowerCase()) || null
  );

  React.useEffect(() => {
    setSelectedStatus(
      statuses.find((status) => status.value === a.priority.toLowerCase()) ||
        null
    );
  }, [a.priority]); // Update when a.priority changes

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            className="w-[150px] justify-start border border-border bg-account hover:bg-hover"
          >
            {selectedStatus ? (
              <>
                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                {selectedStatus.label}
              </>
            ) : (
              <>
                <RxDotsHorizontal className="mr-2 h-4 w-4 shrink-0" />
                No priority
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border border-border p-0"
          side="right"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Change priority..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    className="hover:bg-hover"
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null
                      );
                      setOpen(false);
                    }}
                  >
                    <status.icon className="mr-2 h-4 w-4" />
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
