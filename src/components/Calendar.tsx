import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface CalendarsProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
}

export function Calendars({ value, onChange }: CalendarsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full justify-start rounded border border-border text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          {value ? (
            format(value, "MMMM d, yyyy") // Adjusted date format
          ) : (
            <div className="text-gray h-full w-full overflow-hidden">
              Pick a date*
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="z-50 flex w-auto flex-col space-y-2 bg-background p-2"
      >
        <div className="rounded-md border">
          <Calendar mode="single" selected={value} onSelect={onChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
