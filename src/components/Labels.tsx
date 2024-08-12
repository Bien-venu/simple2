import * as React from "react";
import { FaCircle } from "react-icons/fa";
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
import { cn } from "@/lib/utils";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Status = {
  value: string;
  label: string;
  icon: IconType;
};

const statuses: Status[] = [
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

export function Labels({ a }: { a: { labels: string } }) {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    statuses.find((status) => status.value === a.labels.toLowerCase()) || null
  );

  React.useEffect(() => {
    setSelectedStatus(
      statuses.find((status) => status.value === a.labels.toLowerCase()) || null
    );
  }, [a.labels]); // Update when a.labels changes

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
                <selectedStatus.icon
                  className={`${
                    selectedStatus.value === "improvement" && "text-improvement"
                  } ${selectedStatus.value === "bug" && "text-bug"} ${
                    selectedStatus.value === "feature" && "text-feature"
                  } mr-2 h-4 w-4 shrink-0`}
                />
                {selectedStatus.label}
              </>
            ) : (
              <>
                <FaCircle
                  className={`mr-2 h-4 w-4 shrink-0 text-improvement`}
                />
                Improvement
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change labels..." />
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
                        statuses.find((label) => label.value === value) || null
                      );
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        `mr-2 h-4 w-4 ${
                          status.value === "improvement" && "text-improvement"
                        } ${status.value === "bug" && "text-bug"} ${
                          status.value === "feature" && "text-feature"
                        }`,
                        status.value === selectedStatus?.value
                          ? "opacity-100"
                          : "opacity-50"
                      )}
                    />
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
