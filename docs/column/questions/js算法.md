## 第1题：实现一个函数，判断输入是不是回文字符串。

::: info 概念

“回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。

:::

### 解法一

把字符串反转后

```js
function isPlalindrome(input) {
  // 去除输入字符串中的空格和标点符号
  input = input.replace(/[^\w]/g, "").toLowerCase();

  // 反转字符串
  var reversed = input.split("").reverse().join("");

  // 判断反转后的字符串是否与原始字符串相等
  return input === reversed;
}
```



### 解法二

类似于双重循环，这里是一重循环，然后下标一个加加，一个减减。然后作对比，每一个

```js
function isPlalindrome(input) {
  if (typeof input !== 'string') return false;
  let i = 0, j = input.length - 1
  while(i < j) {
      if(input.charAt(i) !== input.charAt(j)) return false
      i ++
      j --
  }
  return true
}
```



## 第2题：请手写“冒泡排序”



::: info

冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

:::

### 算法步骤

- 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
- 针对所有的元素重复以上的步骤，除了最后一个。
- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

```js
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

## 第3题：请手写“选择排序”

> 从小到大排序，

::: info

选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

:::

### 算法步骤

- 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
- 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
- 重复第二步，直到所有元素均排序完毕。

```js
function selectionSort(arr) {
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log("选择排序", selectionSort(arr));
```

