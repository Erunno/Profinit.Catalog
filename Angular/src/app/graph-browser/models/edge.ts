export interface Edge {
  id: number;

  /**
   * values from 0 to 1
   */
  weight: number;

  source: number;
  target: number;
}
