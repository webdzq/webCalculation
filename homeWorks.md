<p>
<h5>1,翻转字符串算法</h5>
[规则：]<br/>
翻转字符串<br/>

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。<br/>

你的结果必须得是一个字符串<br/>
[思路：]<br/>
[示例：]<br/>
function reverseString(str) {<br/>
  .....<br/>
return str;<br/>
}<br/>

reverseString("hello");<br/>
[测试case：]<br/>
reverseString("hello") 应该返回一个字符串<br/>
reverseString("hello") 应该返回 "olleh".<br/>
reverseString("Howdy") 应该返回 "ydwoH".<br/>
reverseString("Greetings from Earth") 应该返回 "htraE morf sgniteerG".<br/>
</p>
<p>
<h5>2,阶乘算法<h5>
[规则：]<br/>
计算一个整数的阶乘<br/>

如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。<br/>
阶乘通常简写成 n!<br/>

例如: 5! = 1 * 2 * 3 * 4 * 5 = 120<br/>
[思路：]<br/>

[示例：]<br/>
function factorialize(num) {<br/>

  ......<br/>

return num;<br/>
}<br/>

factorialize(5);<br/>
[测试case：]<br/>
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
17,区间求值算法<br/>
规则：<br/>
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。<br/>

最小的数字并非总在最前面。<br/>
思路：<br/>
示例：<br/>
function sumAll(arr) {<br/>

return arr;<br/>
}<br/>

sumAll([1, 4]);<br/>
测试case：<br/>
sumAll([1, 4]) 应该返回一个数字。<br/>
sumAll([1, 4]) 应该返回 10。<br/>
sumAll([4, 1]) 应该返回 10。<br/>
sumAll([5, 10]) 应该返回 45。<br/>
sumAll([10, 5]) 应该返回 45。<br/>
</p>
<p>
18,找出数组间差异算法<br/>
规则：<br/>
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。<br/>
思路：<br/>
示例：<br/>
function diff(arr1, arr2) {<br/>
var newArr = [];<br/>
/

return newArr;<br/>
}<br/>

diff([1,1,2, 2, 3,3, 5,3,5], [1, 2,3,3, 5,3,5, 3, 4, 5]);<br/>
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);<br/>
测试case：<br/>
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) 应该返回一个数组。<br/>
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],<br/> ["diorite", "andesite", "grass", "dirt", "dead shrub"] 应该返回 ["pink wool"]。<br/>
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 应该返回 ["diorite", "pink wool"]。<br/>
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] 应该返回 []。<br/>
[1, 2, 3, 5], [1, 2, 3, 4, 5] 应该返回 [4]。<br/>
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] 应该返回 ["piglet", 4]。
[], ["snuffleupagus", "cookie monster", "elmo"] 应该返回 ["snuffleupagus", "cookie monster", "elmo"]。<br/>
[1, "calf", 3, "piglet"], [7, "filly"] 应该返回 [1, "calf", 3, "piglet", 7, "filly"]。<br/>
</p>
<p>
19,对象搜索算法<br/>
规则：<br/>
写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。<br/>

例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是 { last: "Capulet" }，那么你必须从数组（第一个参数）返回其中的第三个对象，因为它包含了作为第二个参数传递的属性-值对。<br/>
思路：<br/>
示例：<br/>
function where(collection, source) {<br/>
var arr = [];<br/>

return arr;<br/>
}<br/>

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });<br/>
测试case：<br/>
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 应该返回 [{ first: "Tybalt", last: "Capulet" }]。<br/>
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) 应该返回 [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]。<br/>
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) 应该返回 [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]。<br/>
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) 应该返回 [{ "a": 1, "b": 2, "c": 2 }]。<br/>
</p>
<p>
20,查询替换算法<br/>
规则：<br/>
使用给定的参数对句子执行一次查找和替换，然后返回新句子。<br/>

第一个参数是将要对其执行查找和替换的句子。<br/>

第二个参数是将被替换掉的单词（替换前的单词）。<br/>

第三个参数用于替换第二个参数（替换后的单词）。<br/>

注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。<br/>
思路：<br/>
示例：<br/>
function myReplace(str, before, after) {<br/>

return str;<br/>
}<br/>

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");<br/>
测试case：<br/>
myReplace("Let us go to the store", "store", "mall") 应该返回 "Let us go to the mall"。<br/>
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 应该返回 "He is Sitting on the couch"。<br/>
myReplace("This has a spellngi error", "spellngi", "spelling") 应该返回 "This has a spelling error"。<br/>
myReplace("His name is Tom", "Tom", "john") 应该返回 "His name is John"。<br/>
myReplace("Let us get back to more Coding", "Coding", "algorithms") 应该返回 "Let us get back to more Algorithms"。<br/>
</p>
<p>
21,字符配对算法<br/>
规则：<br/>
DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。<br/>

Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。<br/>

在每一个数组中将给定的字母作为第一个碱基返回。<br/>

例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]<br/>

字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。<br/>
思路：<br/>
示例：<br/>
function pair(str) {<br/>
  var arr=[];<br/>

return arr;<br/>
}<br/>

pair("GCG");<br/>
测试case：<br/>
pair("ATCGA") 应该返回 [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]。<br/>
pair("TTGAG") 应该返回 [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]。<br/>
pair("CTCTA") 应该返回 [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]。<br/>
</p>
<p>
22,字符串查询补充算法<br/>
规则：<br/>
从传递进来的字母序列中找到缺失的字母并返回它。<br/>

如果所有字母都在序列中，返回 undefined。<br/>
思路：<br/>
示例：<br/>
function fearNotLetter(str) {<br/>

return res;<br/>
}<br/>

fearNotLetter("abce");<br/>
测试case：<br/>
fearNotLetter("abce") 应该返回 "d"。<br/>
fearNotLetter("abcdefghjklmno") 应该返回 "i"。<br/>
fearNotLetter("bcd") 应该返回 undefined。<br/>
fearNotLetter("yz") 应该返回 undefined。<br/>
</p>
<p>
23,输入检查算法<br/>
规则：<br/>
检查一个值是否是基本布尔类型，并返回 true 或 false。<br/>

基本布尔类型即 true 和 false<br/>
思路：<br/>
示例：<br/>
function boo(bool) {<br/>
// What is the new fad diet for ghost developers? The Boolean.<br/>

return bool;<br/>
}<br/>

boo(null);<br/>
测试case：<br/>
boo(true) 应该返回 true。<br/>
boo(false) 应该返回 true。<br/>
boo([1, 2, 3]) 应该返回 false。<br/>
boo([].slice) 应该返回 false。<br/>
boo({ "a": 1 }) 应该返回 false。<br/>
boo(1) 应该返回 false。<br/>
boo(NaN) 应该返回 false。<br/>
boo("a") 应该返回 false。<br/>
boo("true") 应该返回 false。<br/>
boo("false") 应该返回 false。<br/>
</p>
<p>
24,数组去重算法<br/>
规则：<br/>
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。<br/>

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。<br/>

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。<br/>

请参照下面验证判断中的例子。<br/>
思路：<br/>
示例：<br/>
function unite(arr1, arr2, arr3) {<br/>

return arr1;<br/>
}<br/>

unite([1, 3, 2], [1, [5]], [2, [4]]);<br/>
测试case：<br/>
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]。<br/>
unite([1, 3, 2], [1, [5]], [2, [4]]) 应该返回 [1, 3, 2, [5], [4]]。<br/>
unite([1, 2, 3], [5, 2, 1]) 应该返回 [1, 2, 3, 5]。<br/>
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 应该返回 [1, 2, 3, 5, 4, 6, 7, 8]。<br/>
</p>
<p>
25,html符号转实体算法<br/>
规则：<br/>
将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。<br/>
思路：<br/>
示例：<br/>
function convert(str) {<br/>
// &colon;&rpar;


return str;<br/>
}<br/>

convert("Dolce & <>Gabbana");<br/>
convert('Stuff in "quotation marks"');<br/>
测试case：<br/>
convert("Dolce & Gabbana") 应该返回 Dolce &​amp; Gabbana。<br/>
convert("Hamburgers < Pizza < Tacos") 应该返回 Hamburgers &​lt; Pizza &​lt; Tacos。<br/>
convert("Sixty > twelve") 应该返回 Sixty &​gt; twelve。<br/>
convert('Stuff in "quotation marks"') 应该返回 Stuff in &​quot;quotation marks&​quot;。<br/>
convert("Shindler's List") 应该返回 Shindler&​apos;s List。<br/>
convert("<>") 应该返回 &​lt;&​gt;。<br/>
convert("abc") 应该返回 abc。<br/>
</p>
<p>
26,字符串连接算法<br/>
规则：<br/>
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。<br/>
思路：<br/>
示例：<br/>
function spinalCase(str) {<br/>
// "It's such a fine line between stupid, and clever."<br/>
// --David St. Hubbins<br/>

return str;<br/>
}<br/>

spinalCase("ThisIsSpinalTap");<br/>
测试case：<br/>
spinalCase("This Is Spinal Tap") 应该返回 "this-is-spinal-tap"。<br/>
spinalCase("thisIsSpinalTap") 应该返回 "this-is-spinal-tap"。<br/>
spinalCase("The_Andy_Griffith_Show") 应该返回 "the-andy-griffith-show"。<br/>
spinalCase("Teletubbies say Eh-oh") 应该返回 "teletubbies-say-eh-oh"。<br/>
</p>
<p>
27,斐波纳契奇数求和算法<br/>
规则：<br/>
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。<br/>

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。<br/>

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。<br/>

提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。<br/>
思路：<br/>
示例：<br/>
function sumFibs(num) {<br/>

return num;<br/>
}<br/>

sumFibs(75025);<br/>
测试case：<br/>
sumFibs(1) 应该返回一个数字。<br/>
sumFibs(1000) 应该返回 1785。<br/>
sumFibs(4000000) 应该返回 4613732。<br/>
sumFibs(4) 应该返回 5。<br/>
sumFibs(75024) 应该返回 60696。<br/>
sumFibs(75025) 应该返回 135721。<br/>
</p>

<p>
28,质素求和算法<br/><br/>
规则：<br/>
求小于等于给定数值的质数之和。<br/>

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。<br/>

给定的数不一定是质数。<br/>
思路：<br/>
示例：<br/>
function sumPrimes(num) {<br/>

return num;<br/>
}<br/>

sumPrimes(10);//17<br/>
sumPrimes(977);//73156<br/>
测试case：<br/>
sumPrimes(10) 应该返回一个数字。<br/>
sumPrimes(10) 应该返回 17。<br/>
sumPrimes(977) 应该返回 73156<br/>
</p>
<p>
29,最小公倍数算法<br/>
规则：<br/>
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。<br/>

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。<br/>

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。<br/>
思路：<br/>
示例：<br/>

测试case：<br/>
smallestCommons([1, 5]) 应该返回一个数字。<br/>
smallestCommons([1, 5]) 应该返回 60。<br/>
smallestCommons([5, 1]) 应该返回 60。<br/>
smallestCommons([1, 13]) 应该返回 360360。<br/>
</p>
<p>
30,数组验证算法<br/>
规则：<br/>
写一个 function，它浏览数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。<br/>
思路：<br/>
示例：<br/>
function find(arr, func) {<br/>


return arr;<br/>
}<br/>

find([1, 3,5,8,9,10], function(num){ return num % 2 === 0; });<br/>
测试case：<br/>
find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 应该返回 8。<br/>
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) 应该返回 undefined。<br/>
</p>
<p>
31,数组取值算法<br/>
规则：<br/>
让我们来丢弃数组(arr)的元素，从左边开始，直到回调函数return true就停止。<br/>

第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。<br/>

最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。<br/>
思路：<br/>
示例：<br/>
function drop(arr, func) {<br/>
// Drop them elements.<br/>

return arr;<br/>
}<br/>

drop([0, 1, 0, 1], function(n) {return n ===1; });<br/>
测试case：<br/>
drop([1, 2, 3, 4], function(n) {return n >= 3;}) 应该返回 [3, 4]。<br/>
drop([0, 1, 0, 1], function(n) {return n === 1;}) 应该返回 [1, 0, 1]。<br/>
drop([1, 2, 3], function(n) {return n > 0;}) 应该返回 [1, 2, 3]。<br/>
drop([1, 2, 3, 4], function(n) {return n > 5;}) 应该返回 []。<br/>
drop([1, 2, 3, 7, 4], function(n) {return n > 3;}) 应该返回 [7, 4]。<br/>
drop([1, 2, 3, 9, 2], function(n) {return n > 2;}) 应该返回 [3, 9, 2]。<br/>
</p>
<p>
32,数组简化算法<br/>
规则：<br/>
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套<br/>
思路：<br/>
示例：<br/>
function steamroller(arr) {<br/>
// I'm a steamroller, baby<br/>


return arr;<br/>
}<br/>

steamroller([1, [2], [3, [[4]]]]);<br/>
测试case：<br/>
steamroller([[["a"]], [["b"]]]) 应该返回 ["a", "b"]。<br/>
steamroller([1, [2], [3, [[4]]]]) 应该返回 [1, 2, 3, 4]。<br/>
steamroller([1, [], [3, [[4]]]]) 应该返回 [1, 3, 4]。<br/>
steamroller([1, {}, [3, [[4]]]]) 应该返回 [1, {}, 3, 4]<br/>
</p>
<p>
33,二进制转字符算法<br/>
规则：<br/>
传入二进制字符串，翻译成英语句子并返回。<br/>

二进制字符串是以空格分隔的。<br/>
思路：<br/>
示例：<br/>
function binaryAgent(str) {<br/>

return arr;<br/>
}<br/>

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");<br/>
测试case：<br/>
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") 应该返回 "Aren't bonfires fun!?"<br/>
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") 应该返回 "I love FreeCodeCamp!"<br/>
</p>
<p>
34,数组元素判断算法<br/>
规则：<br/>
完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。<br/>

记住：你只能通过中括号来访问对象的变量属性(pre)。<br/>
思路：<br/>
示例：<br/>
function every(collection, pre) {<br/>
// Is everyone being true?<br/>

return res;<br/>
}<br/>

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");<br/>
测试case：<br/>
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") 应该返回 true。<br/>
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") 应该返回 false。<br/>
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") 应该返回 false。<br/>
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") 应该返回 false<br/>
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") 应该返回 true<br/>
every([{"single": "yes"}], "single") 应该返回 true<br/>
every([{"single": ""}, {"single": "double"}], "single") 应该返回 false<br/>
every([{"single": "double"}, {"single": undefined}], "single") 应该返回 false<br/>
every([{"single": "double"}, {"single": NaN}], "single") 应该返回 false<br/>
</p>
<p>
35,函数迭代可选参数算法<br/>
规则：<br/>
创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。<br/>

例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。<br/>

调用这个有一个参数的返回的 function，返回求和的结果：<br/>

var sumTwoAnd = add(2);<br/>

sumTwoAnd(3) 返回 5。<br/>

如果两个参数都不是有效的数字，则返回 undefined。<br/>
思路：<br/>
示例：<br/>
function add() {<br/>


return true;<br/>
}<br/>

add(2,"3");<br/>
测试case：<br/>
add(2, 3) 应该返回 5。<br/>
add(2)(3) 应该返回 5。<br/>
add("http://bit.ly/IqT6zt") 应该返回 undefined。<br/>
add(2, "3") 应该返回 undefined。<br/>
add(2)([3]) 应该返回 undefined。<br/>
</p>
--------------------以上为中级----------------------------<br/>
<p>
36,判断电话号码算法<br/>
规则：<br/>
如果传入字符串是一个有效的美国电话号码，则返回 true.<br/>

用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):<br/>

555-555-5555<br/>
(555)555-5555<br/>
(555) 555-5555<br/>
555 555 5555<br/>
5555555555<br/>
1 555 555 5555<br/>
在本节中你会看见如 800-692-7753 or 8oo-six427676;laskdjf这样的字符串. 你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 如果字符串中给出了国家代码, 你必须验证其是 1.如果号码有效就返回 true ; 否则返回 false.<br/>
思路：<br/>
示例：<br/>
function telephoneCheck(str) {<br/>
// Good luck!<br/>

return str;<br/>
}<br/>



telephoneCheck("555-555-5555");<br/>
测试case：<br/>
telephoneCheck("555-555-5555") 应该返回一个布尔值.<br/>
telephoneCheck("1 555-555-5555") 应该返回 true.<br/>
telephoneCheck("1 (555) 555-5555") 应该返回 true.<br/>
telephoneCheck("5555555555") 应该返回 true.<br/>
telephoneCheck("555-555-5555") 应该返回 true.<br/>
telephoneCheck("(555)555-5555") 应该返回 true.<br/>
telephoneCheck("1(555)555-5555") 应该返回 true.<br/>
telephoneCheck("1 555)555-5555") 应该返回 false.<br/>
telephoneCheck("1 555 555 5555") 应该返回 true.<br/>
telephoneCheck("1 456 789 4444") 应该返回 true.<br/>
telephoneCheck("123**&!!asdf#") 应该返回 false.<br/>
telephoneCheck("55555555") 应该返回 false.<br/>
telephoneCheck("(6505552368)") 应该返回 false<br/>
telephoneCheck("2 (757) 622-7382") 应该返回 false.<br/>
telephoneCheck("0 (757) 622-7382") 应该返回 false.<br/>
telephoneCheck("-1 (757) 622-7382") 应该返回 false<br/>
telephoneCheck("2 757 622-7382") 应该返回 false.<br/>
telephoneCheck("10 (757) 622-7382") 应该返回 false.<br/>
telephoneCheck("27576227382") 应该返回 false.<br/>
telephoneCheck("(275)76227382") 应该返回 false.<br/>
telephoneCheck("2(757)6227382") 应该返回 false.<br/>
telephoneCheck("2(757)622-7382") 应该返回 false.<br/>
telephoneCheck("555)-555-5555") 应该返回 false.<br/>
telephoneCheck("(555-555-5555") 应该返回 false.<br/>
</p>
<p>
37,集合交集算法<br/>
规则：<br/>
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.<br/>

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).<br/>
思路：<br/>
示例：<br/>
function sym() {<br/>

return [];<br/>
}<br/>

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);<br/>
测试case：<br/>
sym([1, 2, 3], [5, 2, 1, 4]) 应该返回 [3, 4, 5].<br/>
sym([1, 2, 3], [5, 2, 1, 4]) 应该只包含三个元素.<br/>
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该返回 [1, 4, 5]<br/>
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该只包含三个元素.<br/>
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该返回 [1, 4, 5].<br/>
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该只包含三个元素.<br/>
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该返回 [2, 3, 4, 6, 7].<br/>
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该只包含五个元素.<br/>
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该返回 [1, 2, 4, 5, 6, 7, 8, 9].<br/>
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该只包含八个元素.<br/>
</p>
<p>
38,类及对象构建算法<br/>
规则：<br/>
用下面给定的方法构造一个对象.<br/>

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).<br/>

所有有参数的方法只接受一个字符串参数.<br/>

所有的方法只与实体对象交互.<br/>
思路：<br/>
示例：<br/>
var Person = function(firstAndLast) {<br/>

return firstAndLast;<br/>
};<br/>

var bob = new Person('Bob Ross');<br/>
bob.getFullName();<br/>
测试case：<br/>
Object.keys(bob).length 应该返回 6.<br/>
bob instanceof Person 应该返回 true.<br/>
bob.firstName 应该返回 undefined.<br/>
bob.lastName 应该返回 undefined.<br/>
bob.getFirstName() 应该返回 "Bob".<br/>
bob.getLastName() 应该返回 "Ross".<br/>
bob.getFullName() 应该返回 "Bob Ross".<br/>
bob.getFullName() 应该返回 "Haskell Ross" after bob.setFirstName("Haskell").<br/>
bob.getFullName() 应该返回 "Haskell Curry" after bob.setLastName("Curry").<br/>
bob.getFullName() 应该返回 "Haskell Curry" 在 bob.setFullName("Haskell Curry") 之后.<br/>
bob.getFirstName() 应该返回 "Haskell" 在 bob.setFullName("Haskell Curry") 之后.<br/>
bob.getLastName() 应该返回 "Curry" 在 bob.setFullName("Haskell Curry") 之后.<br/>
</p>
<p>
39,数据组合求值算法<br/>
规则：<br/>
举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。<br/>

所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。<br/>

我们可以通过表格来更直观地查看数组中索引和值的关系：<br/>

Index	0	1	2	3	4<br/>
Value	7	9	11	13	15<br/>
任务：帮右边的pairwise函数实现上面的功能。<br/>
思路：<br/>
示例：<br/>
function pairwise(arr, arg) {<br/>


return arr;<br/>
}<br/>

pairwise([1, 4, 2, 3, 0, 5], 100);<br/>
测试case：<br/>
pairwise([1, 4, 2, 3, 0, 5], 7) 应该返回 11.<br/>
pairwise([1, 3, 2, 4], 4) 应该返回 1.<br/>
pairwise([1, 1, 1], 2) 应该返回 1.<br/>
pairwise([0, 0, 0, 0, 1, 1], 1) 应该返回 10.<br/>
pairwise([], 100) 应该返回 0.<br/>
</p>
<p>
40,
规则：
思路：
示例：
测试case：
</p>
