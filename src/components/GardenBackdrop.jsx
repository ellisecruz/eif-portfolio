import { PixelCloud, PixelStar, Flower } from "./PixelArt.jsx";

export function GardenBackdrop() {
  return (
    <div className="garden" aria-hidden="true">
      <PixelCloud className="px-cloud cloud-a" />
      <PixelCloud className="px-cloud cloud-b" />
      <PixelCloud className="px-cloud cloud-c" />
      <PixelStar className="star star-1" />
      <PixelStar className="star star-2" />
      <PixelStar className="star star-3" />
      <div className="ground">
        <Flower className="flower flower-1" />
        <Flower className="flower flower-2" />
        <Flower className="flower flower-3" />
        <Flower className="flower flower-4" />
        <Flower className="flower flower-5" />
      </div>
    </div>
  );
}
