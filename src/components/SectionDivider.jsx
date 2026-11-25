import { Strawberry } from "./PixelArt.jsx";

export function SectionDivider({ showStrawberry = true }) {
  if (!showStrawberry) return null;

  return (
    <div className="divider" aria-hidden="true">
      <Strawberry className="divider-berry" />
    </div>
  );
}
