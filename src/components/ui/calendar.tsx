"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("yesp-3", className)}
      classNames={{
        months: "yesflex yesflex-col sm:yesflex-row yesspace-y-4 sm:yesspace-x-4 sm:yesspace-y-0",
        month: "yesspace-y-4",
        caption: "yesflex yesjustify-center yespt-1 yesrelative yesitems-center",
        caption_label: "yestext-sm yesfont-medium",
        nav: "yesspace-x-1 yesflex yesitems-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "yesh-7 yesw-7 yesbg-transparent yesp-0 yesopacity-50 hover:yesopacity-100"
        ),
        nav_button_previous: "yesabsolute yesleft-1",
        nav_button_next: "yesabsolute yesright-1",
        table: "yesw-full yesborder-collapse yesspace-y-1",
        head_row: "yesflex",
        head_cell:
          "yestext-slate-500 yesrounded-md yesw-9 yesfont-normal yestext-[0.8rem] dark:yestext-slate-400",
        row: "yesflex yesw-full yesmt-2",
        cell: "yesh-9 yesw-9 yestext-center yestext-sm yesp-0 yesrelative [&:has([aria-selected].day-range-end)]:yesrounded-r-md [&:has([aria-selected].day-outside)]:yesbg-slate-100/50 [&:has([aria-selected])]:yesbg-slate-100 first:[&:has([aria-selected])]:yesrounded-l-md last:[&:has([aria-selected])]:yesrounded-r-md focus-within:yesrelative focus-within:yesz-20 dark:[&:has([aria-selected].day-outside)]:yesbg-slate-800/50 dark:[&:has([aria-selected])]:yesbg-slate-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "yesh-9 yesw-9 yesp-0 yesfont-normal aria-selected:yesopacity-100"
        ),
        day_range_end: "yesday-range-end",
        day_selected:
          "yesbg-slate-900 yestext-slate-50 hover:yesbg-slate-900 hover:yestext-slate-50 focus:yesbg-slate-900 focus:yestext-slate-50 dark:yesbg-slate-50 dark:yestext-slate-900 dark:hover:yesbg-slate-50 dark:hover:yestext-slate-900 dark:focus:yesbg-slate-50 dark:focus:yestext-slate-900",
        day_today: "yesbg-slate-100 yestext-slate-900 dark:yesbg-slate-800 dark:yestext-slate-50",
        day_outside:
          "yesday-outside yestext-slate-500 yesopacity-50 aria-selected:yesbg-slate-100/50 aria-selected:yestext-slate-500 aria-selected:yesopacity-30 dark:yestext-slate-400 dark:aria-selected:yesbg-slate-800/50 dark:aria-selected:yestext-slate-400",
        day_disabled: "yestext-slate-500 yesopacity-50 dark:yestext-slate-400",
        day_range_middle:
          "aria-selected:yesbg-slate-100 aria-selected:yestext-slate-900 dark:aria-selected:yesbg-slate-800 dark:aria-selected:yestext-slate-50",
        day_hidden: "yesinvisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="yesh-4 yesw-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="yesh-4 yesw-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
