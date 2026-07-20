export function partIdFromNumber(partNumber: string): string {
  const legacy: Record<string, string> = {
    "12559SP": "part-12559",
    "12545SP": "part-12545",
    "12558SP": "part-12545",
    "31618": "part-31618",
    "49771SP": "part-49771",
    "32015SP": "part-32015",
    "31623SP": "part-31623",
    "11091-1": "part-11091",
  };
  if (legacy[partNumber]) return legacy[partNumber];

  const base = partNumber.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `part-${base}`;
}
