import { Bookmark, Package, Search, Settings } from "lucide-react";
import { ActionTile, ActionTileGrid } from "@/components/ui/ActionTile";
import { DAVEY_BASE } from "@/utils/brands";

export function DaveyQuickLinks() {
  return (
    <ActionTileGrid>
      <ActionTile
        href={`${DAVEY_BASE}/browse`}
        icon={Package}
        title="Browse Pumps"
        description="View pump ranges"
      />
      <ActionTile
        href={`${DAVEY_BASE}/search?filter=parts`}
        icon={Search}
        title="Find a Part"
        description="Search part numbers"
      />
      <ActionTile
        href={`${DAVEY_BASE}/saved`}
        icon={Bookmark}
        title="Saved"
        description="Saved pumps & parts"
      />
      <ActionTile
        href={`${DAVEY_BASE}/settings`}
        icon={Settings}
        title="Settings"
        description="App & catalogue"
      />
    </ActionTileGrid>
  );
}
