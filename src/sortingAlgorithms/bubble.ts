export function bubbleSort(array: number[]) {
  /**
   * Outer Loop: This loop controls the number of passes
   * required to sort the array. In each pass, the largest
   * unsorted element "bubbles" to its correct position at the end
   * of the unsorted portion. The loop runs from `array.length` down to `0`
   * because after each pass, one more element is correctly placed
   * reducing the size of the unsorted portion.
   */
  for (let n = array.length; n >= 0; n--) {
    /**
     * Inner Loop: This loop iterates through the unsorted portion
     * of the array. It compares adjacent elements and swaps them
     * if they are in the wrong order. The `n - 1` ensures that
     * we don't go out of the bounds when accessing `array[i + 1]`.
     */
    for (let i = 0; i < n - 1; i++) {
      /**
       * Comparison: If the current element is greater than the next element,
       * it means they are in the wrong order for an ascending sort.
       */
      if (array[i] > array[i + 1]) {
        /**
         * Swap Elements: This is a destructuring assignment that efficiently
         * swaps the values of `array[i]` and `array[i + 1]`.
         * The element at `array[i]` takes the value of `array[i + 1]`,
         * and the element at `array[i + 1]` takes the value of `array[i]`.
         */
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  /**
   * Return The Sorted Array
   */
  return array;
}

export function* bubbleSortGenerator(array: number[]) {
  /**
   * Initialize `n` to the length of the array, representing the
   * unsorted portion.
   */
  let n = array.length;
  /**
   * Swapped Flag: This boolean variable is used to the optimize the
   * algorithm. If a pass completes without any swaps, it means
   * the array is already sorted, and we can stop early.
   */
  let swapped = true;

  /**
   * Outer Loop: Continues as long as `swapped` is true, meaning
   * at least one swap occurred in the previous pass, indicating
   * the array is not yet fully sorted.
   */
  while (swapped) {
    /**
     * Reset `swapped` to false at the beginning of each pass.
     * if no swaps occur in this pass, `swapped` will remina false,
     * and the `while` loop will terminate.
     */
    swapped = false;
    /**
     * Inner Loop: Iterates through the unsorted portion, comparing
     * adjacent elements.
     */
    for (let i = 0; i < n - 1; i++) {
      /**
       * Yields the current state for visualization purposes.
       * The first array `[i]` indicates the element being considered
       * for comparison.
       * The second array `Array.from({ length: array.length - n }, ...)`
       * represents the elements that are already sorted and in their
       * final positions at the end of the array.
       */
      yield [
        [i],
        Array.from(
          { length: array.length - n },
          (_, i) => array.length - i - 1
        ),
      ] as [number[], number[]];

      /**
       * Comparison: If the current element is greater than the next element,
       * they are out of order.
       */
      if (array[i] > array[i + 1]) {
        /**
         * Swap The Elements: Performs the swap of the out-of-order elements.
         */
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        /**
         * Set `swapped` to true because a swap occurred, indicating
         * that the array is still not sorted.
         */
        swapped = true;
      }
    }
    /**
     * Reduce the range of elements to check since the largest element
     * is "Bubbled" to the end - After each pass, the largest unsorted
     * element is guaranteed to be in its correct position at the end
     * of the current unsorted portion. Therefore, we cna reduce `n`
     * by 1 to exclude this sorted element from the subsequent passes.
     */
    n--;
  }

  /**
   * Final Yield: Once the `while` loop finishes (meaning no swaps
   * occurred in the lst pass), the array is fully sorted.
   * This yield provides a final state, indicating that all elements
   * are sorted. The first empty array `[]` means no specific element
   * is being actively compared. The second array contains all indices,
   * signifying that all elements are now in their sorted positions.
   */
  yield [[], Array.from({ length: array.length }, (_, i) => i)] as [
    number[],
    number[]
  ];

  /**
   * Return The Sorted Array
   */
  return array;
}
