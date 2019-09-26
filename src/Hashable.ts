import { Equatable } from "./Equatable";

export interface Hashable extends Equatable {
  /**
   * The following condition must hold true:
   *
   * `a.equals(b)` implies `a.hash === b.hash`
   * 
   * This must be a 32-bit signed integer.
   */
  readonly hash: number;
}
