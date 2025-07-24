export function insertionSort(array: number[]) {
  /**
   * Outer Loop: Iterates from the second element (index 1) to the end of the array.
   * The first element (at index 0) is considered already "sorted" as a single-element list.
   * In each iteration, `i` points to the current element that needs to be
   * inserted into its correct position within the already sorted subarray. The subarray
   * are the elements from index `0` to `index i - 1`.
   */
  for (let i = 1; i < array.length; i++) {
    /**
     * Store the value of the current element to be inserted.
     * This `valuew` will be placed into its correct sorted position.
     */
    const value = array[i];
    /**
     * Initialize `j` to the index of the last element in the
     * already sorted subarray (the elements before `i`).
     * This `j` variable will be used to traverse backwards through the sorted array.
     */
    let j = i - 1;

    /**
     * Inner Loop: This loop shifts elements in the sorted subarray
     * to the right to make space for the `value`.
     * It continues as long as `j` is a valid index (>= 0) and the
     * element at `array[j]` is greater than `value`
     */
    for (j; j >= 0; j--) {
      /**
       * If the current element in the sorted subarray(`array[j]`)
       * is greater than `value`, the element we want to insert
       * the `array[j]` needs to be shifted one position to the right
       * to make space for `value`.
       */
      if (array[j] > value) {
        array[j + 1] = array[j];
      } else {
        /**
         * If `array[j]` is not greater than `value`, it means
         * we have found the correct position for `value` (or than
         * `value` is larger than all of the elements in the sorted subarray).
         * So we break out of the inner loop.
         */
        break;
      }
    }

    /**
     * Place the `value` in its correctly sorted position.
     * After the inner loop `j` will be the index of the element
     * that is less than or equal to `value`, or -1 if `value` is
     * the smallest. So, `j` + 1 is the correct insertion point.
     */
    array[j + 1] = value;
  }

  return array;
}

export function* insertionSortGenerator(array: number[]) {
  const n = array.length;

  /**
   * Outer Loop: Similar to the non-generator version. Iterates from
   * the second element to the end. `i` marks the element to be
   * inserted.
   */
  for (let i = 1; i < n; i++) {
    /**
     * Store the current element to be inserted.
     */
    const value = array[i];
    /**
     * Initialize `j` to the index of the last element in the sorted
     * subarray.
     */
    let j = i - 1;

    /**
     * This `while` loop is the core of the insertion process.
     * It continues as long as `j` is a valid index (i.e. we
     * haven't reached te beginning of the array) AND the element
     * at `array[j]` is greater than `value`.
     */
    while (j >= 0 && array[j] > value) {
      /**
       * Yield the current state for visualization purposes.
       * `[j + 1]` indicates the position where an element is
       * about to be shifted (or where `value` will eventually
       * placed). The empty array `[]` typically means no
       * elements are sorted yet in the context of the generator's
       * visualization output format for this phase.
       */
      yield [[j + 1], []] as [number[], number[]];
      /**
       * Shift `array[j]` one position to the right.
       * The original `array[j]` value is essentially moved to
       * `array[j + 1] `
       *
       * NOTE: The commented out `array[j + 1] = array[j]` is the
       * classic way to write this shift of the elements but
       * `[array[j], array[j + 1]] = [array[j + 1], array[j]]`
       * is a swap that is actually happening if you trace the code.
       * It means the actual value  of `array[j]` moves to `j + 1` and
       * the value is the placed where the value of `j + 1` previously
       * was. In a strict Insertion Sort, you'd move `array[j]` to
       * `array[j + 1]` then decrement `j` opening up room for `value`.
       * The current swap implementation is a slight variation to visually
       * show the shifting
       */
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      //* array[j + 1] = array[j]

      /**
       * Decrement `j` to move to the previous element in the sorted
       * subarray.
       */
      j--;
    }

    /**
     * After the `while` loop `j` is either -1 (if `value` is the
     * smallest) or points to an element less than or equal to
     * `value`. Therefore, `j + 1` is the correct place to insert
     * `value`. Yield this final poistion before inserting.
     */
    yield [[j + 1], []] as [number[], number[]];

    /**
     * Place the `value` into its correct sorted poisition.
     */
    array[j + 1] = value;
  }

  /**
   * Final Yield: Once the sorting is complete, yield the start that
   * shows all of the sorted elements. `[]` means that there are no
   * active comparisons, and the second array contains all indices,
   * signfying completion of the process.
   */
  yield [[], Array.from({ length: array.length }, (_, i) => i)] as [
    number[],
    number[],
  ];

  /**
   * Return the sorted array.
   */
  return array;
}
