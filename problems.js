// Write a function that takes a string as input and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('')
}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("12345")); // Output: "54321"



// Write a function that takes an array of numbers and returns the maximum number in the array.

function findMax(arr) {
    return Math.max(...arr);
}

// Test cases
console.log(findMax([1, 3, 5, 2, 4])); // Output: 5
console.log(findMax([-10, -5, -8])); // Output: -5
console.log(findMax([100, 200, 150])); // Output: 200

// Write a function that takes a string as input and returns the number of vowels in the string (a, e, i, o, u).

function countVowels(str) {
    const vowels = 'aeiou';
    let vowelCount = 0;

    for(const letter of str) {
        if(vowels.includes(letter)) {
            vowelCount++
        }
    }

    return vowelCount;
}

// Test cases
console.log(countVowels("hello")); // Output: 2
console.log(countVowels("world")); // Output: 1
console.log(countVowels("JavaScript")); // Output: 3

// Write a function that takes a string as input and returns true if it's a palindrome, false otherwise.

function isPalindrome(str) {
    if(str.split('').reverse().join('') == str) {
        return true;
    }
    return false;
}

// Test cases
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("level")); // Output: true

// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

function sumOfEvens(arr) {
    let sumEvens = 0;

    for(const num of arr) {
        if(num % 2 == 0){
            sumEvens+= num;
        }
    }
    return sumEvens
}

// Test cases
console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // Output: 12
console.log(sumOfEvens([2, 4, 6, 8, 10])); // Output: 30
console.log(sumOfEvens([1, 3, 5, 7, 9])); // Output: 0

// Write a function that takes an array of consecutive (increasing) numbers starting from 1 and returns the missing number in the sequence.

function findMissingNumber(arr) {
    if(!arr.includes(1)) {
        return 1
    }

    for(let i = 0; i < arr.length; i++) {
        if((arr[i] + 1) !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
}

// Test cases
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([1, 3, 4, 5])); // Output: 2
console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1

// Write a function that rotates an array to the right by a given number of steps.

function rotateArray(arr, steps) {
    for(let i = 0; i < steps; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr
}

// Test cases
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], 1)); // Output: [5, 1, 2, 3, 4]

// Write a function that takes a completed sudoku puzzle represented as a 9x9 matrix and returns true if the puzzle is valid, false otherwise.

function isValidSudoku(board) {

}

// Test cases
const sudokuBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
console.log(isValidSudoku(sudokuBoard)); // Output: true

// Write a function that takes two strings and returns the length of the longest common subsequence.

function longestCommonSubsequence(text1, text2) {
    let commonChars = '';
    let longestStr;
    let shortestStr;

    if(text1.length > text2.length) {
        longestStr = text1
        shortestStr = text2
    }
    else {
        longestStr = text2
        shortestStr = text1
    }
    
    for(const letter of longestStr ) {
        if(shortestStr.includes(letter)) {
            commonChars += letter
        }
    }

    return commonChars.length;
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc")); // Output: 3
console.log(longestCommonSubsequence("abc", "def")); // Output: 0

