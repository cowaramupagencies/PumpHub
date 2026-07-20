import Image from "next/image";
import { cn } from "@/utils";
import {
  DAVEY_LOGO_SQUARE_PATH,
  DAVEY_LOGO_WORDMARK_PATH,
} from "@/utils/brands";

interface DaveyLogoProps {
  variant?: "wordmark" | "square";
  className?: string;
  priority?: boolean;
}

export function DaveyLogo({
  variant = "wordmark",
  className,
  priority = false,
}: DaveyLogoProps) {
  if (variant === "square") {
    return (
      <Image
        src={DAVEY_LOGO_SQUARE_PATH}
        alt="Davey"
        width={696}
        height={696}
        priority={priority}
        className={cn("h-full w-full object-contain", className)}
      />
    );
  }

  return (
    <Image
      src={DAVEY_LOGO_WORDMARK_PATH}
      alt="Davey"
      width={450}
      height={250}
      priority={priority}
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}
