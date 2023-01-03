/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let head, tail;
  let carry = 0; // 进位

  while (l1 || l2) {
      const num1 = l1 ? l1.val : 0;
      const num2 = l2 ? l2.val : 0;
      const sum = num1 + num2 + carry;
      carry = Math.floor(sum / 10);

      if (!head) {
          // 当 res 连表不存在的时候，创建链表以及 head 和 tail 指针
          head = tail = new ListNode(sum % 10);
      } else {
          // 当 res 链表存在的时候，加入到 tail 的 next 位置
          tail.next = new ListNode(sum % 10);
          tail = tail.next; 
      }

      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }

  if (carry > 0) {
      tail.next = new ListNode(carry);
  }

  return head;
};
// @lc code=end
