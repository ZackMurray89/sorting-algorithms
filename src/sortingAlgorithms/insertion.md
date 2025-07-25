# Insertion Sort Explination

**Insertion Sort** is a simple sorting algorithm that builds the final
sorted array (or list) one element at a time. It works much like the way
you may sort a hand of playing cards.

## How It Works

1. It iterates through the input array starting from the second element.

2. For each element it picks (the "key"), it compares it with the other
   elements in the already sorted portion of the array (elements to its left).

3. If an element in the sorted position is greater than the key, it shifts the
   element one position to the right to make space.

4. The shifting continues until finds an element that is less than or equal
   to the key, or it reaches the beginning of the array.

5. The key is then inserted into its correct position.

## Time Complexity

- **Worst Case & Average Case**: _O(n^2^)_- This occurs when the array is sorted
  in reverse order as every element needs to be compared and shifted extensively.

- **Best Case**: _O(n)_- This occurs when the array is already sorted. In this
  scenario, the inner loop only performs a single comparison for each element
  before breaking, resulting in linear time.

## Space Complexity

- **O(1)** (In Place Sorting): It requires a minimal amount of extra memory space.
  Typically just for storing the `value` (key) being inserted.

## When To Use Insertion Sort

1. **Small Data Sets:** Similar to Bubble Sort, Insertion Sort is good for smaller
   arrays (e.g. less than 20-30 elements), the overhead of more complex algorithms
   often outweigh the benefits of their better asymptomatic complexity. Insertion
   Sort's simplicity can make it faster in practice for smaller inputs.

2. **Nearly Sorted Data:** This is where Insertion Sort shows its strongest advatage.
   If an array is already mostly sorted, with only a few elements that are out of place,
   Insertion Sort performs exceptionally well. Each misplaced element only requires a few
   shifts, leading to performance much cloer to _O(n)_.

3. **Online Algorithms/Live Data Streams:** Insertion Sort can effeciently sort lists as
   new elements are received. If you have an existing sorted lists, and new elements are
   arriving one-by-one, you can effeciently insert each new element into its correct place
   without re-sorting the entire list from scratch. This makes it suitable for situations
   where data arrives sequentially and must be maintained in a sorted order.

4. **Simplicity & Ease Of Implementation:** Insertion Sort is relatively easy to understand
   and quickly implement correctly. This makes it a good choice in situations where developer
   time and code clarity is more critical than raw performance on large and unsorted datasets.

5. **Part Of Hybrid Sorting Algorithms:** Insertion sort is often used as a component of much
   larger and more complex hybrid sorting algorithms (like TimSort or IntroSort). These
   algorithms use Insertion Sort for subarrays below a certain size threshold because Insertion
   Sort becomes more effecient than the recursive overhead of other algorithms like Merge Sort
   or Quick Sort on small portions.

## When Not To Use Insertion Sort

1. **Large Randomly Ordered Datasets:** For large arrays with elements in a random order, Insertion
   Sorts _O(n^2^)_ complexity will lead to very poor performance.

2. **When Performance On Unsorted Data Is Critical:** If you consistently need to sort large and
   highly unsorted arrays opt for a differenct algorithm like Quick Sort, Merge Sort or Heap Sort.
