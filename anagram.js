//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//Input: s = "anagram", t = "nagaram"
//Output: true

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const counts = {};

  for (let val of s) {
    counts[val] = (counts[val] || 0) + 1;
  }

  for (let val of t) {
    if (!counts[val]) return false;
    counts[val]--;
}
  return true
}
console.log(isAnagram("catt" , "aatt"));


