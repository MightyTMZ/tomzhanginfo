type Challenge = {
  id: number;
  title: string;
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
      { id: 1, title: "Even or Odd", link: "https://github.com/MightyTMZ/python100/blob/main/ch_02/even_or_odd.py" },
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
  // {
  //   name: "Recursion",
  //   challenges: [
  //     { id: 7, title: "Factorial", link: "/solutions/factorial" },
  //     { id: 8, title: "Tower of Hanoi", link: "/solutions/tower-of-hanoi" },
  //   ],
  // },
  // {
  //   name: "Sorting & Searching",
  //   challenges: [
  //     { id: 9, title: "Binary Search", link: "/solutions/binary-search" },
  //     { id: 10, title: "Merge Sort", link: "/solutions/merge-sort" },
  //   ],
  // },
  // Add more categories here...
];
