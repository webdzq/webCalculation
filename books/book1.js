/**
书名：数据结构与算法javascript描述.

**/
//1, 数组的浅复制和深复制。
//浅复制
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]); // 显示 400
//深复制
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
print(samenums[0]); // 显示 1
//2,列表
function List() {
    this.listSize = 0;
    this.pos = 0; //位置指针
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}
// List.prototype={
//   constructor:List,
//   append:function(){
//     //给列表添加元素
//     this.dataStore[this.listSize++] = element;
//   }
// };
function append(element) {
    //给列表添加元素
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    //在列表中查找某一元素
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    //从列表中删除元素
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    //列表中有多少个元素
    return this.listSize;
}

function toString() {
    //显示列表中的元素
    return this.dataStore;
}

function insert(element, after) {
    //向列表中插入一个元素
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    //清空列表中所有的元素
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    //判断给定值是否在列表中
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

//遍历列表-元素位置相关的函数。
function front() {
    //初始位置
    this.pos = 0;
}

function end() {
    //末尾位置
    this.pos = this.listSize - 1;
}

function prev() {
    //前移一个
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    //后移一个
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    //当前位置
    return this.pos;
}

function moveTo(position) {
    //移动到指定位置 0<position<this.listSize - 1,
    if (0 < position && position < this.listSize - 1) {
        this.pos = position;
    } else {
        if (position < 0) {
            this.pos = 0;
        } else {
            this.pos = this.listSize - 1;
        }
    }

}

function getElement() {
    //得到当前位置的元素
    return this.dataStore[this.pos];
}
//使用迭代器访问列表
function LTraversal(names) {
    //左遍历
    for (names.front(); names.currPos() < names.length(); names.next()) {
        console.log(names.getElement());
    }
}


function RTraversal(names) {
    //右遍历
    for (names.end(); names.currPos() >= 0; names.prev()) {
        console.log(names.getElement());
    }
}
//列表示例--略，之后补充完整示例
// var movies = [
//     'The Shawshank Redemption(《肖申克的救赎》) (2) The Godfather(《教父》)',
//     'The Godfather: Part II(《教父 2》)',
//     'Pulp Fiction(《低俗小说》)',
//     'The Good, the Bad and the Ugly(《黄金三镖客》) (6) 12 Angry Men(《十二怒汉》)',
//     'Schindler’s List(《辛德勒名单》)',
//     'The Dark Knight(《黑暗骑士》)',
//     'The Lord of the Rings: The Return of the King(《指环王:王者归来》)'
// ];
//
// var movieList = new List();
// for (var i = 0; i < movies.length; ++i) {
//     movieList.append(movies[i]);
// }

//-------------------------------------
//3,栈-后入先出。数组模拟栈，top模拟指针位置。
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    //入栈，然后改变top的位置
    this.dataStore[this.top++] = element;
}

function pop() {
    //出栈，改变top的位置，然后出栈
    return this.dataStore[--this.top];
}

function peek() {
    //返回数组的第 top-1 个位置的元素,即栈顶元素
    //不出栈，不出栈，不出栈
    return this.dataStore[this.top - 1];
}

function length() {
    //返回栈内元素个数
    return this.top;
}

function clear() {
    //清空栈
    this.top = 0;
}
//栈的示例和应用；

/**
3-1，数制间的相互转换
[思路:]
(1) 最高位为 n % b,将此位压入栈。
(2) 使用 n/b 代替 n。
(3) 重复步骤 1 和 2,直到 n 等于 0,且没有余数。
(4) 持续将栈内元素弹出,直到栈为空,依次将这些元素排列,就得到转换后数字的字符
串形式。
**/
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base); //求余，入栈

        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop(); //出栈
    }
    return converted;
}
var newNum = mulBase(10, 2); //1010
/**
3-2，回文判断
[思路:]
(1) 回文是指一个字符串，左右对称。如1001，racecar。
(2) 入栈字符串顺序和出栈字符串顺序正好相反。

**/
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}
var word = "racecar";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
} else {
    print(word + " is not a palindrome.");
}
/**
3-3，递归演示
[思路:]
(1) 将递归每个过程产生的中间值入栈。
(2) 然后依次出栈做相应的操作，比如阶乘就是依次做乘法。

**/
//递归
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//栈的写法
function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}
print(factorial(5)); // 显示 120 print(fact(5)); // 显示 120
//练习题--略


//4，队列-先入先出。数组模拟
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    //入队
    this.dataStore.push(element);
}

function dequeue() {
    //出队
    return this.dataStore.shift();
}

function front() {
    //队头
    return this.dataStore[0];
}

function back() {
    //队尾
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    //判断是否空队
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}
//4-1,队列应用及练习略


//5,链表。第一个节点是head，最后一个节点是null。
//Node类--节点对象
function Node(element) {
    this.element = element;
    this.next = null;
}
//LinkedList类
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}



function findPrevious(item) {
    //返回当前节点的前一个
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    //移除节点
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

function display() {
    //显示链表节点
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    //查找当前节点
    var currNode = this.head;

    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    //在某一个节点后插入一个节点
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
//测试程序
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();



//双向链表
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
//findPrevious 没用了,注释掉
/*
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
*/

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print();
cities.remove("Carlisle");
cities.display();
print();
cities.dispReverse();
/**
输出如下:
Conway
Russellville
Carlisle
Alma
Conway
Russellville
Alma
Alma
Russellville
Conway
**/

//循环链表
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
//其他方法，练习略

//6，字典-以键 - 值对形式存储数据的数据结构
function Dictionary() {
    this.add = add;
    this.datastore = [];
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    //添加
    this.datastore[key] = value;
}

function find(key) {
    //查找
    return this.datastore[key];
}

function remove(key) {
    //移除
    delete this.datastore[key];
}

function showAll() {
    //显示所有
    for each(var key in Object.keys(this.datastore)) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    //字典个数
    var n = 0;
    for each(var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    //清空
    for each(var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}
//测试程序
var pbook = new Dictionary();
var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
print("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
//练习略
//7,散列- 一种常用的数据存储技术,散列后的数据可以快速地插入或取用。散列使用的数据结构叫做散列表
//[1]碰撞：存在将两个键映射成同一个值的现象。
//[2]数组长度：最好是质数，减小碰撞发生的概率。

function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function put(key, vdata) {
    var data = vdata || key;
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function simpleHash(data) {
    //这个产生键值的算法，容易产生碰撞，如字符串 "Clayton" 和 "Raymond" 的散列值是一样的。
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function betterHash(string) {
    //优化后的散列值算法，减少碰撞的发生
    var H = 37; //常量
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}
//7-1,碰撞的解决办法
//[1]:开链法:在创建存储散列过的键值的数组时,通过调用一个函数创建一个新 的空数组,然后将该数组赋给散列表里的每个数组元素。这样就创建了一个二维数组
function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

function showDistro() {
    //重写
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;

    while (this.table[pos][index] != undefined) {
        ++index;
    }
    this.table[pos][index] = data;

}

function get(key) {
    var index = 0;
    var pos = this.betterHash(key);
    var len = this.table[pos].length;
    while (index < len && this.table[pos][index] != key) {

        index++;
    }
    return this.table[pos][index];
}
//测试用例：
var hTable = new HashTable();
hTable.buildChains = buildChains;
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i], someNames[i]);
}
hTable.showDistro();
console.log(hTable.get('Jonathan'));
//[2]:线性探测法:当发生碰撞时,线性探测法检查散列表中的下一个位置是否为空。如果为空, 就将数据存入该位置.不为空，继续next。直到空位置。
var hTable = new HashTable();
hTable.values = [];

function put(key, data) {
    var pos = this.betterHash(key);

    while (this.table[pos] != undefined) {
        pos++;
    }

    this.table[pos] = key;
    this.values[pos] = data;

}

function get(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}
//测试用例
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i], someNames[i]);
}
hTable.showDistro();
console.log(hTable.get('Jonathan'));

//练习 略
//8,集合：一种包含不同元素的数据结构，有两个特性：不同元素和无序。
// [1]并集
// [2]交集
// [3]补集
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.contains = contains;
    this.show = show;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function union(set) {
    //并集
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    //交集操作
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size() {
    return this.dataStore.length;
}

function subset(set) {
    //子集
    if (this.size() > set.size()) {

        return false;
    } else {
        for (var member in this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

function difference(set) {
    //补集操作
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
//测试用例：
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
cis.add("Bryan");
cis.add("Bryanw");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
//并集
var un = new Set();
un = cis.union(it);
console.log("并集=", un.show());
//交集
var inter = cis.intersect(it);
console.log("交集=", inter.show()); // 显示 Raymond
//子集
var dmp = new Set();
dmp.add("Bryan");

if (dmp.subset(it)) {
    console.log("dmp is a subset of it");
} else {
    console.log("DMP is not a subset of IT.");
}
//补集
var diff = new Set();
diff = cis.difference(it);
console.log("补集=", diff.show());
//9，二叉树和二叉查找树：一种非线性的数据结构，用来存储具有层级关系的数据
// 边： 每个方框都是一个节点, 连接方框 的线
// 路径： 从一个节点到另一个节点的这一组边
// 树的深度： 树的层数。 根节点是第 0 层。
// 二叉树： 每个节点的子节点不允许超过两个。 相对较小的值保存在左节点中, 较大的值保存在右节点中。
function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.remove = remove;
    this.find = find;
    this.update = update;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
//9.1-有三种遍历 BST 的方式:中序、先序和后序
function inOrder(node) {
    //中序遍历：LDR,巧记：左根右

    if (node !== null) {
        inOrder(node.left);
        console.log("node=", node.show() + " ");
        inOrder(node.right);
    }
}


function preOrder(node) {
    //先序遍历：DLR,巧记：根左右

    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}


function postOrder(node) {
    //后序遍历：LRD,巧记：左右根

    if (node !== null) {
        postOrder(node.left);

        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

//查找最小值和最大值
function getMin() {
    //最左边的最后一个节点最小
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    //最右边的最后一个节点最大
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    //查找
    var current = this.root;
    while (current !== null) {
        if (current.data == data) {

            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}
//删除


function getSmallest(node) {
    //得到该节点的最小子节点
    var current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function remove(data) {
    //返回新的二叉树
    var root = removeNode(this.root, data);
    return root;
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left === null && node.right === null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left === null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right === null) {
            return node.left;
        }
        // 有两个子节点的节点---
        //如果待删除节点包含两个子节点,正确的做法有两种:要么查找待删除节点左子树上的最大值,要么查找其右子树上的最小值.
        //采用最小值创建一个临时节点。将 临时节点上的值复制到待删除节点,然后再删除临时节点
        var tempNode = getSmallest(node.right);

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


//综合测试用例：
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);

nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(21);

console.log("bst: ", nums.root); //(23,16(3,21)，45(37,99));
console.log("中序遍历：LDR,巧记：左根右");
inOrder(nums.root); //中序遍历输出：3,16,21,23,37,45,99
console.log("先序遍历：DLR,巧记：根左右");
preOrder(nums.root); //先序遍历输出：23，16，3，21，45，37，99
console.log("后序遍历：LRD,巧记：左右根 ");
postOrder(nums.root); //后序遍历输出：3 21 16 37 99 45 23
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);

var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);
var found = nums.find(3);
if (found !== null) {
    console.log("Found " + found.data + " in the BST.");
} else {
    console.log(found.data + " was not found in the BST.");
}
nums.insert(19);
nums.insert(22);
postOrder(nums.root); //后序遍历输出：3 19 22 21 16  37 99 45 23
var newroot = nums.remove(16); //有左右子树的节点
console.log("newroot=", newroot);
postOrder(nums.root); //后序遍历输出：3 22 21 19 37 99 45 23
//添加计数功能
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; ++i) {
        console.log(arr[i].toString() + ' ');
        if (i % 10 === 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
//示例：记录不同成绩出现的次数
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade === null) {
        gradedistro.insert(g);
    } else {
        gradedistro.update(g);
    }
}
var g = 20;
var aGrade = gradedistro.find(g);
if (aGrade === null) {
    console.log("No occurrences of " + g);
} else {
    console.log("Occurrences of " + g + ": " + aGrade.count);
}
//-------------------------
//10,图和图算法
// 图：由边的集合及顶点的集合组成
// 有向图：一个 图的顶点对是有序的。
// 边：
// 顶点;
// 成本：
// 环：
// 圈：
// 简单圈：
// 平凡圈：
// 强连通：
// 邻接表或者邻接表数组： 表示图的边的方法。 将边存储为由顶点的相邻顶点列表构成的数组
// 邻接矩阵： 一个二维数组, 其中的元素表示两个顶点之间是否有一条边。
// 实际应用;
// 地图， 交通图， 局域网， 供应商与消费者等。
function Vertex(label) {
    //顶点函数，这个有点简单。
    this.label = label; //标识顶点
    //this.wasVisited=wasVisited;//表明这 个顶点是否被访问过的布尔值
}

function Graph(v) {
    this.vertices = v; //顶点值范围
    this.edges = 0; //边数
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }

    }
}
//测试用例：
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
//输出结果：
// 0 -> 1 2
//      1 -> 0 3
//      2 -> 0 4
//      3 -> 1
// 4 -> 2

//深度优先搜索:从一条路径的起始顶点开始追溯,访问一个没有访问过的顶点,将它标记为已访问,再递归地
//去访问在初始顶点的邻接表中其他没有访问过的顶点,直到到达最后一个顶点
function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    this.edgeTo = []; //保存从一个顶点到下一个顶点的所有边
    this.pathTo = pathTo;
    this.hasPathTo = hashPathTo;
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push(""); //这行导致每个数组第一个元素都是空，预留
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs; //深度优先搜索算法
    this.bfs = bfs; //广度优先搜索算法
    this.marked = []; //访问节点标记，默认都是false
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
    for (var j = 0; j < this.vertices; j++) {
        this.marked[j] = false;
    }
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + " -> ");
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + '  ');
            }
        }
        //print();
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log("dfs Visited vertex: v= " + v);
    }
    for (var w in this.adj[v]) {
        var item = this.adj[v][w]; //书上这个地方有问题，导致3，4遍历不到
        if (!this.marked[item]) {
            this.dfs(item);
        }
    }
}


//广度优先搜索：从第一个顶点开始,尝试访问尽可能靠近它的顶点，步骤如下：
// (1) 查找与当前顶点相邻的未访问顶点,将其添加到已访问顶点列表及队列中;
// (2) 从图中取出下一个顶点 v,添加到已访问的顶点列表;
// (3) 将所有与 v 相邻的未访问顶点添加到队列

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
        var v = queue.shift(); // 从队首移除
        if (v !== undefined) {
            console.log("bfs Visisted vertex:  " + v);
        }
        for (var w in this.adj[v]) {
            var item = this.adj[v][w];
            if (!this.marked[item]) {
                this.edgeTo[item] = v;
                this.marked[item] = true;
                queue.push(item);
            }
        }
    }
}
//最短路径--bfs实现
function pathTo(v) {
    //从根节点到v节点的路径
    var source = 0; //根节点或源节点
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    console.log("path=", path.reverse().join('-'));
    return path;
}

function hashPathTo(v) {
    return this.marked[v];
}




//测试用例：
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0); //深度优先搜索
//初始化marked数组
for (var j = 0; j < g.vertices; j++) {
    g.marked[j] = false;
}
g.bfs(0); //广度优先搜索

console.log("Visited vertex: mark= " + g.marked, g.adj);
//最短路径
var vertex = 4;
var paths = g.pathTo(vertex);

//总结：书上是有些问题的。marked的初始化，vertices=5，元素值0-4的关联性需要注意一下。
//拓扑排序：对有向图的所有顶点进行排序,使有向边从前面的顶点指向后面的顶点
//拓扑排序算法与深度优先搜索类似。不同的是,拓扑排序算法不会立即输出已访问的顶点,而是访问当前顶点邻接表中的所有相邻顶点,直到这个列表穷尽时,才将当前顶点压 入栈中
function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var j = 0; j < this.vertices; j++) {
        if (visited[j] === false) {
            this.topSortHelper(j, visited, stack);
        }
    }
    for (var k = 0; k < stack.length; k++) {
        if (stack[k] !== undefined && stack[k] !== false) {
            console.log(this.vertexList[stack[k]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    //按照深度优先搜索实现的
    visited[v] = true;
    for (var w in this.adj[v]) {
        var item = this.adj[v][w];
        if (!visited[item]) {
            this.topSortHelper(visited[item], visited, stack);
        }
    }
    stack.push(v);
}

function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        //console.log(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    //  console.log(this.vertexList[j] + ' ');
                }
            }
        }
        visited.pop();
    }
}
//拓扑排序-测试用例
var g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures",
    "Assembly Language", "Operating Systems",
    "Algorithms"
]; //有向图
g.showGraph();
g.topSort();
//总结：书上有不少错误的地方，请主动控制台执行一下。上边的代码有已经在chrome的控制台测试过了。
//-------------------------------
//11,排序算法
//数组测试平台:辅助我们完成基本排序算法的研究
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;

    this.gaps = [5, 3, 1];
    this.setGaps = setGaps;
    this.shellsort = shellsort;
    this.shellsort1 = shellsort1;

    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 === 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
//测试用例：
var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
//[1]冒泡排序算法,最慢的排序算法之一.其实后边先整齐的
function bubbleSort() { //升序
    var numElements = this.dataStore.length;
    var temp;
    var start = new Date().getTime();
    console.log("bubbleSort排序开始：", start);
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }

        console.log(this.toString());

    }
    var end = new Date().getTime();
    console.log("bubbleSort排序结束", end);
    console.log("bubbleSort消耗时间：", end - start);
}

//选择排序算法，前边先整齐的。
function selectionSort() {
    var min, temp;
    var start = new Date().getTime();
    console.log("selectionSort排序开始：", start);
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer; //关键的一句
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
        console.log(this.toString());
    }
    var end = new Date().getTime();
    console.log("selectionSort排序结束", end);

    console.log("selectionSort消耗时间：", end - start);
}
//插入排序
function insertionSort() {
    var temp, inner;
    var start = new Date().getTime();
    console.log("insertionSort排序开始：", start);
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer]; //存放最初的比较元素
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        //while结束后，inner的位置是空的。
        this.dataStore[inner] = temp;
        console.log(this.toString());
    }
    var end = new Date().getTime();
    console.log("insertionSort排序结束", end);
    console.log("insertionSort消耗时间：", end - start);
}




//高级排序算法
//希尔排序:通过定义一个间隔序列来表示在排序过程中进行比较的元素之 间有多远的间隔
function shellsort() {
    //这个非常的慢
    var start = new Date().getTime();
    console.log("shellsort排序开始：", start);
    for (var g = 0; g < this.gaps.length; ++g) {
        console.log("排序间隔=", this.gaps[g]);
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] &&
                this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
            console.log(this.toString());
        }

    }
    var end = new Date().getTime();
    console.log("shellsort排序结束", end);
    console.log("shellsort消耗时间：", end - start);
}

function setGaps(arr) {
    this.gaps = arr;
}

function shellsort1() {
    //优化后的希尔排序，动态间隔序列
    var N = this.dataStore.length;
    var h = 1;
    var start = new Date().getTime();
    console.log("shellsort1排序开始：", start);
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h);
            }
            console.log(this.toString());
        }
        h = (h - 1) / 3;
    }
    var end = new Date().getTime();
    console.log("shellsort1排序结束", end);
    console.log("shellsort1消耗时间：", end - start);
}
// 归并排序：采用非递归或者迭代版本的归并排序是一个自底向上的过程
function mergeSort(varr) {
    var arr = varr || this.dataStore;
    if (arr.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    var start = new Date().getTime();
    console.log("mergeSort排序开始：", start);
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
    var end = new Date().getTime();
    console.log("mergeSort排序结束", end);
    console.log("mergeSort消耗时间：", end - start);
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var j = 0; j < (leftArr.length - 1); ++j) {
        leftArr[j] = arr[k];
        ++k;
    }

    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity; // 哨兵值
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}

// 快速排序
// (1) 选择一个基准元素,将列表分隔成两个子序列;
// (2) 对列表重新排序,将所有小于基准值的元素放在基准值的前面,所有大于基准值的元
// 素放在基准值的后面;
// (3) 分别对较小元素的子序列和较大元素的子序列重复步骤 1 和 2。
function qSort(list) {

    if (list.length === 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0]; //基准元素
    console.log("list.length=", list.length);

    for (var i = 1; i < list.length; i++) {
        console.log(" 基准值:" + pivot + " 当前元素:" + list[i]);
        if (list[i] < pivot) {
            console.log(" 移动 " + list[i] + " 到左边 ");
            lesser.push(list[i]);
        } else {
            console.log(" 移动 " + list[i] + " 到右边 ");
            greater.push(list[i]);
        }
    }

    return qSort(lesser).concat(pivot, qSort(greater));
}

//测试快速排序
var a = [];
for (var i = 0; i < 100; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(a);
var start = new Date().getTime();
console.log("qSort排序开始：", start);
console.log(qSort(a));
var end = new Date().getTime();
console.log("qSort排序结束", end);
console.log("qSort消耗时间：", end - start);
// 堆排序-略
//测试用例：
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();

mynums.clear();
mynums.setData();
console.log(mynums.toString());
mynums.selectionSort();

mynums.clear();
mynums.setData();
console.log(mynums.toString());
mynums.insertionSort();

mynums.clear();
mynums.setData();
console.log(mynums.toString());
mynums.shellsort();

mynums.clear();
mynums.setData();
console.log(mynums.toString());
mynums.shellsort1();

mynums.clear();
mynums.setData();
console.log(mynums.toString());
mynums.mergeSort();
console.log(mynums.toString());
//观察冒泡和选择排序，前者是后边先整齐的，后者是前边先整齐的
//总结；测试100个元素，1000个，10000个元素的排序时间(10000个浏览器受不了)。结论就不下来，有点吃惊！程序就在这里。都试试。100个和1000个数据。希尔竟然是最慢。
//缺少了几个算法，有空补上。可以参考：http://www.cnblogs.com/dushao/p/6004883.html

//--------------------------
//检索算法
// 在列表中查找数据有两种方式:顺序查找和二分查找。顺序查找适用于元素随机排列的列表;二分查找适用于元素已排序的列表。
// 二分查找效率更高,但是你必须在进行查找之前 花费额外的时间将列表中的元素排序
//顺序查找： 就是逐个查找

function seqSearch(arr, data) {
    //查找data，找到返回位置，找不到返回-1，类似indexof，但比indexof慢
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function findMin(arr) {
    //查找最小值
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    //查找最大值
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//使用自组织数据：80-20原则（帕累托(Pareto)分布）。将常用的置于起始位置。
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr, i, i - 1); //使用自组织数据，没查到一次前移一位。
            }
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}
//测试用例：
var numbers = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];
console.log(numbers);
for (var i = 1; i <= 3; i++) {
    seqSearch(numbers, 4);
    console.log(numbers);
}
//注：查找3次，4的位置在不断前移。
//改进：根据80-20原则。元素位置在20%之外，才将它移到起始位置。
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr, i, 0);
            return true;
        } else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}
//测试用例：
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.random() * 11);
}
nums.sort();
console.log(nums);
console.log(" 输入一个要查找的值:");
//var val = parseInt(readline());
var val = 2; //val=2和3，查询结果不同。
if (seqSearch(nums, val)) {
    console.log(" 找到了元素:");

    console.log(nums);
} else {
    console.log(val + " 没有出现在这个数组中。");
}
//二分查找算法:(下边界等于或小于上边界)
// a. 将中点设置为(上边界加上下边界)除以 2。
// b. 如果中点的元素小于查询的值,则将下边界设置为中点元素所在下标加 1。
// c. 如果中点的元素大于查询的值,则将上边界设置为中点元素所在下标减 1。
// d. 否则中点元素即为要查找的数据,可以进行返回。
//注：[1]若有重复值，只能取到中间的那个。[2]查找的是有序数组
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function dispArr(arr) {
    console.log(arr.toString());
}
//测试用例：
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
nums.sort();
dispArr(nums);

console.log(" 输入一个要查找的值:");
//var val = parseInt(readline());//模拟命令行输入的
var val = 8;
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    console.log(" 已找到 " + val + " ,所在位置为:" + retVal);
} else {
    console.log(val + " 没有出现在这个数组中。");
}
//计算重复次数
function count(arr, data) {
    //简单计数
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
        }
        for (var k = position + 1; k < arr.length; ++k) {
            if (arr[k] == data) {
                ++count;
            }
        }
    }
    return count;
}
//测试用例：
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];

        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}
//var words = read("words.txt").split(" ");
var word = "The nationalism of Hamilton was undemocratic. The rhetoric rhetoric mission of uniting nationa learned in the schools ";
var words = word.split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log(" 单词 " + word + " 被找的位置在:" + position + "。");
    console.log(" 二分查找消耗了 " + elapsed + " 毫秒。");
} else {
    console.log(word + " 这个单词没有出现在这个文件内容中。");
}
//---------------------------------
//高级算法
//动态规划：斐波那契函数两种实现方法
function recurFib(n) {
    //递归实现
    if (n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

function dynFib(n) {
    //动态规划实现，使用数组实现中间值保存
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var j = 3; j <= n; ++j) {
            val[j] = val[j - 1] + val[j - 2];
        }
        return val[n - 1];
    }
}

function iterFib(n) {
    //动态规划实现，未使用数组
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
var start = new Date().getTime();
console.log(recurFib(10));
var stop = new Date().getTime();
console.log(" 递归计算耗时 - " + (stop - start) + " 毫秒 ");

start = new Date().getTime();
console.log(dynFib(10));
stop = new Date().getTime();
console.log(" 动态规划耗时 - " + (stop - start) + " 毫秒 ");

start = new Date().getTime();
console.log(iterFib(10));
stop = new Date().getTime();
console.log(" 动态规划未用数组版耗时 - " + (stop - start) + " 毫秒 ");

//寻找最长公共子串
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    //初始化
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length + 1; ++j) {

            lcsarr[i][j] = 0;
        }
    }
    //函数部分
    for (var k = 0; k <= word1.length; ++k) {
        var print = "";
        for (var g = 0; g <= word2.length; ++g) {

            if (k === 0 || g === 0) {
                lcsarr[k][g] = 0;
            } else {
                if (word1[k - 1] == word2[g - 1]) {
                    lcsarr[k][g] = lcsarr[k - 1][g - 1] + 1;
                } else {
                    lcsarr[k][g] = 0;
                }
            }
            if (max < lcsarr[k][g]) {
                max = lcsarr[k][g];
                index = k;
            }
            print += lcsarr[k][g] + " ";
        }
        console.log(k, print);
    }
    var str = "";
    if (max === 0) {
        return "";
    } else {
        for (var h = index - max; h <= max; ++h) {
            str += word2[h];
        }
        return str;
    }
}
//测试用例：
lcs('abbcc', 'dbbccd');

//背包问题:递归解决方案
// 描述：如果在我们例子中的保险箱中有 5 件物品,它们的尺寸分别是 3、4、7、8、9,
//而它们的价值分别是 4、5、10、11、13, 且背包的容积为 16,
//那么恰当的解决方案是选取第三件物品和第五件物品,他们的总尺寸是 16,总价值是 23
function max(a, b) {
    return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
    if (n === 0 || capacity === 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] +
            knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1));
    }
}
var value = [4, 5, 10, 11, 13]; //价值，有序
var size = [3, 4, 7, 8, 9]; //尺寸,有序
var capacity = 16; //容积
var n = 5; //物品件数
console.log(knapsack(capacity, size, value, n));
//背包问题:动态规划方案
function max(a, b) {
    return (a > b) ? a : b;
}

function dKnapsack(capacity, size, value, n) {
    var K = [];
    for (var g = 0; g <= capacity + 1; g++) {
        K[g] = [];
    }
    for (var i = 0; i <= n; i++) {
        var print = "";
        for (var w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
                    K[i - 1][w]);
                //  print += K[i][w] + " ";
            } else {
                K[i][w] = K[i - 1][w];
                //print += K[i][w] + " ";
            }

            print += K[i][w] + " ";
        }
        console.log(i, print);
    }
    return K[n][capacity];
}
var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(dKnapsack(capacity, size, value, n));
// 贪心算法
// 找零问题:你从商店购买了一些商品,找零 63 美分,店员要 怎样给你这些零钱呢?如果店员根据贪心算法来找零的话,
// 他会给你两个 25 美分、一个 10 美分和三个 1 美分。在没有使用 50 美分的情况下这是最少的硬币数量
function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % 25 < origAmt) {
        coins[3] = parseInt(origAmt / 25);
        remainAmt = origAmt % 25;
        origAmt = remainAmt;
    }
    if (origAmt % 10 < origAmt) {
        coins[2] = parseInt(origAmt / 10);
        remainAmt = origAmt % 10;
        origAmt = remainAmt;
    }
    if (origAmt % 5 < origAmt) {
        coins[1] = parseInt(origAmt / 5);
        remainAmt = origAmt % 5;
        origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / 1);

}

function showChange(coins) {
    if (coins[3] > 0) {
        console.log("25 美分的数量 - " + coins[3] + " - " + coins[3] * 25);
    }
    if (coins[2] > 0) {
        console.log("10 美分的数量 - " + coins[2] + " - " + coins[2] * 10);
    }
    if (coins[1] > 0) {
        console.log("5 美分的数量 - " + coins[1] + " - " + coins[1] * 5);
    }
    if (coins[0] > 0) {
        console.log("1 美分的数量 - " + coins[0] + " - " + coins[0] * 1);
    }
}
var origAmt = 63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);
