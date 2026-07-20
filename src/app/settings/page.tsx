import { redirect } from "next/navigation";
import { DAVEY_BASE } from "@/utils/brands";

export default function Page() {
  redirect(`${DAVEY_BASE}/settings`);
}
