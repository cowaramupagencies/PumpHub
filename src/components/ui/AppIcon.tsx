import Image from "next/image";
import { cn, PUMPHUB_LOGO_PATH } from "@/utils";

interface AppIconProps {
  className?: string;
  priority?: boolean;
}

export function AppIcon({ className = "h-8 w-auto max-w-[9rem]", priority = false }: AppIconProps) {
  return (
    <Image
      src={PUMPHUB_LOGO_PATH}
      alt="PumpHub"
      width={2002}
      height={612}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
