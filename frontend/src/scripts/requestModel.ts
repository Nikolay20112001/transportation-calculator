import { preset } from "./presets";

export class requestModel {
  width: Number;
  depth: Number;
  height: Number;
  weight: Number;
  from: String;
  to: String;
  isStrict: Boolean;

  constructor(from: String, to: String, _preset: preset) {
    this.from = from;
    this.to = to;
    this.width = _preset.width;
    this.depth = _preset.depth;
    this.height = _preset.height;
    this.weight = _preset.weight;
    this.isStrict = false;
  }
}
