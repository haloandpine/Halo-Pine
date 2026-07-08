"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

type Props = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
};

export default function DatePicker({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-[#DDD] bg-white p-4 text-left"
      >
        {value ? format(value, "MMMM d, yyyy") : "Wedding Date"}
      </button>

      {open && (
        <div className="absolute z-50 mt-3 rounded-2xl border bg-white p-4 shadow-2xl">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </div>
      )}

    </div>
  );
}