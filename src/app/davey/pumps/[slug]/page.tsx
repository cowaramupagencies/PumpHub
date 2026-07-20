import { Suspense } from "react";
import { PumpDetailPage } from "@/features/pumps/PumpDetailPage";
import { LoadingSpinner } from "@/components/ui/Card";

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PumpDetailPage />
    </Suspense>
  );
}
