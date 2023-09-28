/**
 * Representing a class room.
 */
export default class ClassRoom {
  /**
   * Creating a new @see {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum number of
   * students in a class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
