/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) return 1
  return nums.pop() * product(nums)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 0) return ""
  return Math.max(words.pop().length, longest(words))

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  
  if (i >= str.length/2) return ""
   return str[i*2] + everyOther(str,i+1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if (i >= (str.length-1-i)) return true
  if (str[i] != str[str.length-1-i]) return false
  return isPalindrome(str, i+1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i= 0) { 
  if (arr.length == i) return -1
  if (arr[i] == val) return i
  return findIndex(arr,val,i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i= 0, res = "") {
 if (str.length == i) return ""
 res = str[i]
 return revString(str, i+1, res) + res
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, res = [], i = 0) {
  let out = []

  function isString(obj,i){
    if (Object.values(obj).length === i) return
    if((typeof Object.values(obj)[i]) == "object"){
      isString(Object.values(obj)[i],0)
    }
    if ((typeof Object.values(obj)[i]) == "string") out.push(Object.values(obj)[i])
    isString(obj, i+1)
  }
  
  isString(obj, 0)
  return out
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let rightBound = arr.length
  let leftBound = 0

  function checkMiddle(arr){
    
    const i = Math.floor((rightBound + leftBound)/2)
    console.log(i)
    if (arr[i] > val) {rightBound = i-1}
    else{leftBound = i+1}
    if (arr[i] == val) {console.log("herE",i);return i}
    if (leftBound > rightBound) return -1
    return checkMiddle(arr)
  }

  return checkMiddle(arr)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
