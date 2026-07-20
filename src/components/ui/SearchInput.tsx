import { cn } from "@/utils";
import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  large?: boolean;
}

export function SearchInput({ className, large = true, ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-muted"
        aria-hidden
      />
      <input
        type="search"
        enterKeyHint="search"
        className={cn(
          "w-full rounded-2xl border-2 border-[var(--border-color)] bg-[var(--card-bg)] pl-14 pr-5 text-lg shadow-sm placeholder:text-muted focus:border-blue focus:outline-none",
          large ? "min-h-16" : "min-h-[3.25rem] text-base",
          className,
        )}
        {...props}
      />
    </div>
  );
}
