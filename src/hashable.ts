import { Equatable } from "./equatable";

export interface Hashable extends Equatable {
  /**
   * The following condition must hold true:
   *
   * `a.equals(b)` implies `a.hash === b.hash`
   */
  readonly hash: number;
}
