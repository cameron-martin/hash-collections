import { Hashable } from ".";

export class Vector2 implements Hashable {
  constructor(public readonly x: number, public readonly y: number) {}

  get hash(): number {
    return this.x + this.y;
  }

  equals(other: this): boolean {
    return this.x == other.x && this.y == other.y;
  }
}
