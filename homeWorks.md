<p>
1,翻转字符串算法<br/>
规则：<br/>
翻转字符串<br/>

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。<br/>

你的结果必须得是一个字符串<br/>
思路：<br/>
示例：<br/>
function reverseString(str) {<br/>
  .....<br/>
return str;<br/>
}<br/>

reverseString("hello");<br/>
测试case：<br/>
reverseString("hello") 应该返回一个字符串<br/>
reverseString("hello") 应该返回 "olleh".<br/>
reverseString("Howdy") 应该返回 "ydwoH".<br/>
reverseString("Greetings from Earth") 应该返回 "htraE morf sgniteerG".<br/>
</p>
<p>
2,阶乘算法<br/>
规则：<br/>
计算一个整数的阶乘<br/>

如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。<br/>
阶乘通常简写成 n!<br/>

例如: 5! = 1 * 2 * 3 * 4 * 5 = 120<br/>
思路：<br/>

示例：<br/>
function factorialize(num) {<br/>

  ......<br/>

return num;<br/>
}<br/>

factorialize(5);<br/>
测试case：<br/>
factorialize(5) 应该返回一个数字<br/>
factorialize(5) 应该返回 120.<br/>
factorialize(10) 应该返回 3628800.<br/>
factorialize(20) 应该返回 2432902008176640000.<br/>
factorialize(0) 应该返回 1.<br/>
</p>
<p>
3,回文算法<br/>
规则：<br/>
如果给定的字符串是回文，返回true，反之，返回false。<br/>

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。<br/>

注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。<br/>

函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。<br/>
思路：<br/>
示例：<br/>
function palindrome(str) {<br/>
// Good luck!<br/>

......<br/>
    return str;<br/>

}<br/>

palindrome("eye");<br/>
测试case：<br/>
palindrome("eye") 应该返回一个布尔值<br/>
palindrome("eye") 应该返回 true.<br/>
palindrome("race car") 应该返回 true.<br/>
palindrome("not a palindrome") 应该返回 false.<br/>
palindrome("A man, a plan, a canal. Panama") 应该返回 true.<br/>
palindrome("never odd or even") 应该返回 true.<br/>
palindrome("nope") 应该返回 false.<br/>
palindrome("almostomla") 应该返回 false.<br/>
palindrome("My age is 0, 0 si ega ym.") 应该返回 true.<br/>
palindrome("1 eye for of 1 eye.") 应该返回 false.<br/>
palindrome("0_0 (: /-\ :) 0-0") 应该返回 true.<br/>
</p>
<p>
4,寻找最长的单词算法<br/>
规则：<br/>
找到提供的句子中最长的单词，并计算它的长度。<br/>

函数的返回值应该是一个数字。<br/>
思路：<br/>
示例：<br/>
function findLongestWord(str) {<br/>
  .......<br/>
return str;<br/>
}<br/>

findLongestWord("The quick brown fox jumped over the lazy dog");<br/>
测试case：<br/>
findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回一个数字<br/>
findLongestWord("The quick brown fox jumped over the lazy dog") 应该返回 6.<br/>
findLongestWord("May the force be with you") 应该返回 5.<br/>
findLongestWord("Google do a barrel roll") 应该返回 6.<br/>
findLongestWord("What is the average airspeed velocity of an unladen swallow") 应该返回 8.<br/>
findLongestWord("What if we try a super-long word such as otorhinolaryngology") 应该返回 19<br/>
</p>
<p>
5，设置首字母大写算法<br/>
规则：<br/>
确保字符串的每个单词首字母都大写，其余部分小写。<br/>

像'the'和'of'这样的连接符同理。<br/>
思路：<br/>
示例:<br/>
function titleCase(str) {<br/>
  ........<br/>
return str;<br/>
}<br/>

titleCase("I'm a little tea pot");<br/>
测试case：<br/>
titleCase("I'm a little tea pot") 应该返回一个字符串<br/>
titleCase("I'm a little tea pot") 应该返回 "I'm A Little Tea Pot".<br/>
titleCase("sHoRt AnD sToUt") 应该返回 "Short And Stout".<br/>
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") 应该返回 "Here Is My Handle Here Is My Spout".<br/>
</p>
<p>
6,寻找数组中的最大值算法<br/>
规则：<br/>
右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。<br/>

提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。<br/>
思路：<br/>
示例：<br/>
function largestOfFour(arr) {<br/>
// You can do this!<br/>
  .........<br/>
return arr;<br/>
}<br/>

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);<br/>
测试case：<br/>
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回一个数组<br/>
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 应该返回 [27,5,39,1001].<br/>
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 应该返回 [9, 35, 97, 1000000].<br/>
</p>
<p>
7,确认末尾字符算法<br/>
规则：<br/>
检查一个字符串(str)是否以指定的字符串(target)结尾。<br/>

如果是，返回true;如果不是，返回false。<br/>
思路：<br/>
示例：<br/>
function confirmEnding(str, target) {<br/>
// "Never give up and good luck will find you."<br/>
// -- Falcor<br/>

return str;<br/>
}<br/>

confirmEnding("Bastian", "n");<br/>
测试case：<br/>
confirmEnding("Bastian", "n") 应该返回 true.<br/>
confirmEnding("Connor", "n") 应该返回 false.<br/>
confirmEnding("Walking on water and developing software from a specification<br/> are easy if both are frozen", "specification") 应该返回 false.<br/>
confirmEnding("He has to give me a new name", "name") 应该返回 true.<br/>
confirmEnding("He has to give me a new name", "me") 应该返回 true.<br/>
confirmEnding("He has to give me a new name", "na") 应该返回 false.<br/>
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") 应该返回 false.<br/>
</p>
<p>
8,重复操作算法<br/>
规则：<br/>
重要的事情说3遍！<br/>

重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。<br/>
思路：<br/>
示例：<br/>
function repeat(str, num) {<br/>
// repeat after me

return str1;<br/>
}<br/>

repeat("abc", 3);<br/>
测试case：<br/>
repeat("*", 3) 应该返回 "***".<br/>
repeat("abc", 3) 应该返回 "abcabcabc".<br/>
repeat("abc", 4) 应该返回 "abcabcabcabc".<br/>
repeat("abc", 1) 应该返回 "abc".<br/>
repeat("*", 8) 应该返回 "********".<br/>
repeat("abc", -2) 应该返回 "".<br/>
</p>
<p>
9,字符串截取算法<br/>
规则：<br/>
截断一个字符串！<br/>

如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。<br/>

切记，插入到字符串尾部的三个点号也会计入字符串的长度。<br/>

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。<br/>
思路：<br/>
示例：<br/>
function truncate(str, num) {<br/>
// Clear out that junk in your trunk

return str;<br/>
}<br/>

truncate("A-tisket a-tasket A green and yellow basket", 11);<br/>
测试case：<br/>
truncate("A-tisket a-tasket A green and yellow basket", 11) 应该返回 "A-tisket...".<br/>
truncate("Peter Piper picked a peck of pickled peppers", 14) 应该返回 "Peter Piper...".<br/>
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 应该返回 "A-tisket a-tasket A green and yellow basket".<br/>
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 应该返回 "A-tisket a-tasket A green and yellow basket".<br/>
truncate("A-", 1) 应该返回 "A...".<br/>
truncate("Absolutely Longer", 2) 应该返回 "Ab...".<br/>
</p>
<p>
10,数组分割算法<br/>
规则：<br/>
把一个数组arr按照指定的数组大小size分割成若干个数组块。<br/>

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];<br/>

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];<br/>
思路：<br/>
示例：<br/>
function chunk(arr, size) {<br/>
// Break it up.


return arr;<br/>
}<br/>

chunk(["a", "b", "c", "d"], 2);<br/>
测试case：<br/>
chunk(["a", "b", "c", "d"], 2) 应该返回 [["a", "b"], ["c", "d"]].<br/>
chunk([0, 1, 2, 3, 4, 5], 3) 应该返回 [[0, 1, 2], [3, 4, 5]].<br/>
chunk([0, 1, 2, 3, 4, 5], 2) 应该返回 [[0, 1], [2, 3], [4, 5]].<br/>
chunk([0, 1, 2, 3, 4, 5], 4) 应该返回 [[0, 1, 2, 3], [4, 5]].<br/>
chunk([0, 1, 2, 3, 4, 5, 6], 3) 应该返回 [[0, 1, 2], [3, 4, 5], [6]].<br/>
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) 应该返回 [[0, 1, 2, 3], [4, 5, 6, 7], [8]].<br/>
</p>
<p>
11,数组截断算法挑战<br/>
规则：<br/>
返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。<br/>
思路：<br/>
示例：<br/>
function slasher(arr, howMany) {<br/>
// it doesn't always pay to be first

return arr;<br/>
}<br/>

slasher([1, 2, 3], 2);<br/>
测试case：<br/>
slasher([1, 2, 3], 2) 应该返回 [3].<br/>
slasher([1, 2, 3], 0) 应该返回 [1, 2, 3].<br/>
slasher([1, 2, 3], 9) 应该返回 [].<br/>
slasher([1, 2, 3], 4) 应该返回 [].<br/>
slasher(["burgers", "fries", "shake"], 1) 应该返回 ["fries", "shake"].<br/>
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) 应该返回 ["cheese", 4].<br/>
</p>
<p>
12,数组查询算法<br/>
规则：<br/>
如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。<br/>

举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。<br/>

["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。<br/>

["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。<br/>
思路：<br/>
示例：<br/>
function mutation(arr) {<br/>


return arr;<br/>
}<br/>

mutation(["hello", "hey"]);<br/>
测试case：<br/>
mutation(["hello", "hey"]) 应该返回 false.<br/>
mutation(["hello", "Hello"]) 应该返回 true.<br/>
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) 应该返回 true.<br/>
mutation(["Mary", "Army"]) 应该返回 true.<br/>
mutation(["Mary", "Aarmy"]) 应该返回 true.<br/>
mutation(["Alien", "line"]) 应该返回 true.<br/>
mutation(["floor", "for"]) 应该返回 true.<br/>
mutation(["hello", "neo"]) 应该返回 false.<br/>
</p>
<p>
13,删除数组中特定值算法<br/>
规则：<br/>
删除数组中的所有假值。<br/>

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。<br/>
思路：<br/>
示例：<br/>
function bouncer(arr) {<br/>
// Don't show a false ID to this bouncer.

return narr;<br/>
}<br/>

bouncer([7, "ate", "", false, 9]);<br/>
测试case：<br/>
bouncer([7, "ate", "", false, 9]) 应该返回 [7, "ate", 9].<br/>
bouncer(["a", "b", "c"]) 应该返回 ["a", "b", "c"].<br/>
bouncer([false, null, 0, NaN, undefined, ""]) 应该返回 [].<br/>
bouncer([1, null, NaN, 2, undefined]) 应该返回 [1, 2].<br/>
</p>
<p>
14,去除数组中任意多个值算法<br/>
规则：<br/>
实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值<br/>
思路：<br/>
示例：<br/>
测试case：<br/>
destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1].<br/>
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) 应该返回 [1, 5, 1].<br/>
destroyer([3, 5, 1, 2, 2], 2, 3, 5) 应该返回 [1].<br/>
destroyer([2, 3, 2, 3], 2, 3) 应该返回 [].<br/>
destroyer(["tree", "hamburger", 53], "tree", 53) 应该返回 ["hamburger"].<br/>
</p>
<p>
15,数组排序并插入值算法<br/>
规则：<br/>
先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。<br/>

举例：where([1,2,3,4], 1.5) 应该返回 1。因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1。<br/>

同理，where([20,3,5], 19) 应该返回 2。因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2。<br/>
思路：<br/>
示例：<br/>
function where(arr, num) {<br/>
// Find my place in this sorted array.

return arr;<br/>
}<br/>

where([10, 20, 30, 40, 50], 30);<br/>
测试case：<br/>
where([10, 20, 30, 40, 50], 35) 应该返回 3.<br/>
where([10, 20, 30, 40, 50], 30) 应该返回 2.<br/>
where([40, 60], 50) 应该返回 1.<br/>
where([3, 10, 5], 3) 应该返回 0.<br/>
where([5, 3, 20, 3], 5) 应该返回 2.<br/>
where([2, 20, 10], 19) 应该返回 2.<br/>
where([2, 5, 10], 15) 应该返回 3.<br/>
</p>
<p>
16,位移密码算法<br/>
规则：<br/>
下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。<br/>

移位密码也就是密码中的字母会按照指定的数量来做移位。<br/>

一个常见的案例就是ROT13(http://www.baike.com/wiki/ROT13&prd=so_1_doc)密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔'O'，以此类推。<br/>

写一个ROT13函数，实现输入加密字符串，输出解密字符串。<br/>

所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。<br/>
思路：<br/>
示例：<br/>
function rot13(str) { // LBH QVQ VG!<br/>


return str;<br/>
}<br/>

// Change the inputs below to test
rot13("SERR PBQR PNZC");<br/>


测试case：<br/>
rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"<br/>
rot13("SERR CVMMN!") 应该解码为 "FREE PIZZA!"<br/>
rot13("SERR YBIR?") 应该解码为 "FREE LOVE?"<br/>
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") 应该解码为 "THE QUICK<br/> BROWN DOG JUMPED OVER THE LAZY FOX."<br/>
</p>
-----------------------以上16个为初级算法------------------------<br/>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
<p>
6,寻找数组中的最大值算法
规则：
思路：
示例：
测试case：
</p>
