/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/** 滑动窗口双指针 */
var lengthOfLongestSubstring = function(s) {
  if (s === null || s.length === 0) {
      return 0;
  }

  let left = 0, right = 0, res = 0;
  const set = new Set();

  for (right; right < s.length; right++) {
      if (!set.has(s[right])) {
          set.add(s[right]);
          res = Math.max(res, set.size);
      } else {
          // set 中有重复元素，则不断让 left++ 并删除相同的元素，直至没有重复元素
          while (set.has(s[right])) {
              set.delete(s[left]);
              left++;
          }
          set.add(s[right]);
      }
  }

  return res;
};
// @lc code=end

