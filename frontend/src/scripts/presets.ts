export class preset {
  name: String;
  width: Number;
  depth: Number;
  height: Number;
  weight: Number;

  constructor(
    name: String,
    width: Number,
    depth: Number,
    height: Number,
    weight: Number
  ) {
    this.name = name;
    this.width = width;
    this.depth = depth;
    this.height = height;
    this.weight = weight;
  }
}

export const presetArray: preset[] = [
  { name: "Конверт", width: 34, depth: 2, height: 27, weight: 0.5 } as preset,
  { name: "Короб XS", width: 17, depth: 9, height: 12, weight: 0.5 } as preset,
  { name: "Короб S", width: 23, depth: 10, height: 19, weight: 2 } as preset,
  { name: "Короб M", width: 33, depth: 25, height: 25, weight: 5 } as preset,
  { name: "Короб L", width: 60, depth: 30, height: 35, weight: 12 } as preset,
];

export function fillPresets(selectPresetElement: Element) {
  presetArray.forEach((value, index) => {
    selectPresetElement.innerHTML += `<option value="${index}">${value.name} ${value.width}x${value.depth}x${value.height} см, до ${value.weight} кг</option>\n`;
  });
}
