/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;

  if (totalLength % 2 === 1) { // 如果两个数组长度总和为奇数
      const midIndex = parseInt(totalLength / 2);
      return getKthElement(nums1, nums2, midIndex + 1);
  } else { // 如果两个数组长度总和为偶数
      const midIndex1 = parseInt(totalLength / 2) - 1;
      const midIndex2 = parseInt(totalLength / 2);
      const res = (getKthElement(nums1, nums2, midIndex1 + 1) + getKthElement(nums1, nums2, midIndex2 + 1)) / 2;
      return res;
  }
};

const getKthElement = (nums1, nums2, k) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let idx1 = 0; // nums1 数组起始位置指针
  let idx2 = 0; // nums2 数组起始位置指针
  let idxK = k;

  while (true) {
      if (idx1 === len1) { // 如果一个数组已筛选完成，返回另一个数组中第 k 小的元素
          return nums2[idx2 + idxK - 1];
      }
      if (idx2 === len2) { // 如果一个数组已筛选完成，返回另一个数组中第 k 小的元素
          return nums1[idx1 + idxK - 1];
      }
      if (idxK === 1) { // 如果 k=1，返回两个数组首元素的最小值
          return Math.min(nums1[idx1], nums2[idx2]);
      }

      const newIdx1 = Math.min(idx1 + parseInt(idxK / 2), len1) - 1;
      const newIdx2 = Math.min(idx2 + parseInt(idxK / 2), len2) - 1;
      const pivot1 = nums1[newIdx1]; // nums1 中小于等于 pivot1 的元素有 nums1[0 .. k/2-2] 共计 k/2-1 个
      const pivot2 = nums2[newIdx2]; // nums2 中小于等于 pivot2 的元素有 nums2[0 .. k/2-2] 共计 k/2-1 个

      // 取 pivot = min(pivot1, pivot2)，两个数组中小于等于 pivot 的元素共计不会超过 (k/2-1) + (k/2-1) <= k-2 个
      if (pivot1 <= pivot2) { // 过滤掉 nums1 中小于等于 pivot1 的元素，并修改 k 的值以及 nums1 数组起始位置指针
          idxK = idxK - (newIdx1 - idx1 + 1);
          idx1 = newIdx1 + 1;
      } else { // 过滤掉 nums2 中小于等于 pivot2 的元素，并修改 k 的值以及 nums2 数组起始位置指针
          idxK = idxK - (newIdx2 - idx2 + 1);
          idx2 = newIdx2 + 1;
      }
  }
};
// @lc code=end

