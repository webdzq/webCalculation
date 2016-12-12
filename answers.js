//1,翻转字符串算法
//方法1：
function reverseString(str) {
  var arr = str.split('');
  str = arr.reverse().join('');
return str;
}

reverseString("hello");
