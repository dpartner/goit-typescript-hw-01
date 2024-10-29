type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Bottom = Pick<AllType, "position" | "weight">;

let top: Top = {
  name: "John",
  color: "red",
};
let bottom: Bottom = {
  position: 2,
  weight: 32,
};

function compare(top: Top, bottom: Bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
