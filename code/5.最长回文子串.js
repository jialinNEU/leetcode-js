/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

/** 方法1：动态规划 */
// 定义 dp[i][j] 表示子串 i～j 是否是回文子串
// 如果 s[i]，s[j] 相等，则 dp[i][j] 是否为回文串取决于 dp[i+1][j-1] 是否也是回文子串
// 时间复杂度 O(n^2)，两层循环。空间复杂度 O(n^2)，即动态规划 dp 数组的空间。
var longestPalindrome = function(s) {
  if (!s.length || s.length === 1) {
      return s;
  }

  let res = '';
  const n = s.length;
  const dp = Array.from(new Array(n), () => new Array(n).fill(false));
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i; j < n; j++) {
          // j - i < 2表示子串小于等于1也是回文串
          dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1]);
          // 更新最大长度
          if (dp[i][j] && j - i + 1 > res.length) {
              res = s.substring(i, j + 1);
          }
      }
  }

  return res;
};

/** 方法2：左右指针 */
// function longestPalindrome(s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         // 寻找长度为奇数的回文子串(以当前元素向两边扩散)
//         const s1 = palindrome(s, i, i);
//         // 寻找长度为偶数的回文子串(以s[i],s[i + 1])向两边扩散
//         const s2 = palindrome(s, i, i + 1);
//         res = res.length > s1.length ? res : s1;
//         res = res.length > s2.length ? res : s2;
//     }
//     return res;
// };

// function palindrome(str, left, right) {
//     // 左右指针，从 str[left] 和 str[right] 向两边扩散，找到最长回文串
//     while (left >= 0 && rigiht < str.length && str[left] == str[rigiht]) {
//         left--;
//         right++;
//     }
//     return str.substr(left + 1, right - left - 1);
// }
// @lc code=end
