let solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };
};

// binary search(이진 검색)법 활용
// https://www.youtube.com/watch?v=P1j1eKrBx4E 참고
