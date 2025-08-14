type Challenge = {
  id: number;
  title: string;
  description?: string;
  link: string;
};

type Category = {
  name: string;
  challenges: Challenge[];
};

export const categories: Category[] = [
  {
    name: "Mathematics",
    challenges: [
      { id: 1, title: "Even or Odd", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/even_or_odd.py", description: "Is an integer even or odd?" },
      { id: 2, title: "Number as Text (Simple)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/number_as_text.py" },
      { id: 3, title: "Perfect Numbers", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/perfect_numbers.py" },
      { id: 4, title: "Prime Numbers", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/prime_numbers.py" },
      { id: 5, title: "Prime Numbers Pairs", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/prime_number_pairs.py" },
      { id: 6, title: "Checksum", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/checksum.py" },
      { id: 7, title: "Roman Numerals", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/roman_numerals.py" },
      { id: 8, title: "Combinatorics (Quadratic)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/combinatorics.py" },
      { id: 9, title: "Combinatorics (Cubic)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/combinatorics.py" },
      { id: 10, title: "Armstrong Numbers", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/armstrong_numbers.py" },
      { id: 11, title: "Max Change Calculator", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/max_change_calculator.py" },
      { id: 12, title: "Related Numbers", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/related_numbers.py" },
      { id: 13, title: "Prime Factorization", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/prime_factorization.py" },

    ],
  },
  {
    name: "Recursion",
    challenges: [
      { id: 14, title: "Fibonacci", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/fibonacci.py" },
      { id: 15, title: "Count Digits", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/count_digits.py" },
      { id: 16, title: "GCD", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/gcd.py" },
      { id: 17, title: "LCM", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/lcm.py" },
      { id: 18, title: "List Sum", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/list_sum.py" },
      { id: 19, title: "List Min", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/list_min.py" },
      { id: 20, title: "Reverse String", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/reverse_string.py" },
      { id: 21, title: "Power", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/power.py" },
      { id: 22, title: "Cross Sum", link: "https://github.com/MightyTMZ/python100/blob/main/ch_03/cross_sum.py" },
    ],
  },
  {
    name: "Strings",
    challenges: [
      { id: 23, title: "Anagrams", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/anagram.py" },
      { id: 24, title: "Baseball Game", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/baseball_game.py" },
      { id: 25, title: "Tennis Score & Game", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/tennis_score.py" },
      { id: 26, title: "Capitalize", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/capitalize.py" },
      { id: 27, title: "Joiner", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/joiner.py" },
      { id: 28, title: "Morse Code", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/morse_code.py" },
      { id: 29, title: "Check Duplicates", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/no_duplicate_chars.py" },
      { id: 30, title: "Palindromes (string)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/palindrome.py" },
      { id: 31, title: "Reverse String", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/reverse_string.py" },
      { id: 33, title: "Binary, HEX to Decimal", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/string_to_numbers.py" },
      { id: 34, title: "Well formed braces", link: "https://github.com/MightyTMZ/python100/blob/main/ch_04/well_formed_braces.py" },
    ],
  },
  {
    name: "Lists, Sets, Dictionaries, and Data Structures",
    challenges: [
      { id: 34, title: "Addition of Digits", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/addition_of_digits.py" },
      { id: 35, title: "List Reverse (inplace)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/list_reverse_in_place.py" },
      { id: 36, title: "List Reverse (without index)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/list_reverse_without_index.py" },
      { id: 37, title: "Maximum Profit", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/maximum_profit.py" },
      { id: 38, title: "Stack (data structure)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/stack.py" },
      { id: 39, title: "Queue (data structure)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_05/queue.py" },
    ],
  },
  {
    name: "Arrays",
    challenges: [
      { id: 40, title: "Add One to Array", link: "https://github.com/MightyTMZ/python100/blob/main/ch_06/add_one_to_array.py" },
      { id: 41, title: "Array Split", link: "https://github.com/MightyTMZ/python100/blob/main/ch_06/array_split.py" },
      { id: 42, title: "Even Before Odd Numbers", link: "https://github.com/MightyTMZ/python100/blob/main/ch_06/even_before_odd_numbers.py" },
      { id: 43, title: "Palindrome (array version)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_06/palindrome.py" },
    ],
  },

    {
    name: "Advanced Recursion",
    challenges: [
      { id: 44, title: "Fibonacci (with memoization)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_07/fibonacci_memo.py" },
      { id: 45, title: "Pascal Triangle (with memoization)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_07/pascal_triangle.py" },
      { id: 46, title: "Tower of Hanoi (graphical)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_07/graphical_tower_of_hanoi.py" },
      { id: 47, title: "Edit Distance", link: "https://github.com/MightyTMZ/python100/blob/main/ch_07/edit_distance.py" },
    ],
  },
    {
    name: "Binary Tree",
    challenges: [
      { id: 48, title: "Binary Tree Node", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/binary_tree.py" },
      { id: 49, title: "Invert a Binary Tree", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/invert.py" },
      { id: 50, title: "Lower Common Ancestor (LCA)", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/lower_common_ancestor.py" },
      { id: 51, title: "Symmetry", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/symmetry.py" },
      { id: 52, title: "Tree Height", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/tree_height.py" },
      { id: 53, title: "Rotate Tree", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/tree_rotate.py" },
      { id: 54, title: "Level Sum", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/level_sum.py" },
      { id: 55, title: "Example Trees", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/example_trees.py" },
      { id: 56, title: "Count Nodes", link: "https://github.com/MightyTMZ/python100/blob/main/ch_08/count_nodes.py" },

    ],
  },
    {
    name: "Searching and Sorting",
    challenges: [
      { id: 57, title: "Python: Useful Shortcuts", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/basics.py" },
      { id: 58, title: "Binary Search", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/binary_search.py" },
      { id: 59, title: "Insertion Sort", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/insertion_sort.py" },
      { id: 60, title: "Selection Sort", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/selection_sort.py" },
      { id: 61, title: "Quick Sort", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/quick_sort.py" },
      { id: 62, title: "Contains All", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/contains_all.py" },
      { id: 63, title: "Partitioning", link: "https://github.com/MightyTMZ/python100/blob/main/ch_09/partitioning.py" },
    ],
  },
];
