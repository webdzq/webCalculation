//1,翻转字符串算法
//方法1：
function reverseString(str) {
    var arr = str.split('');
    str = arr.reverse().join('');
    return str;
}

reverseString("hello");
//2,求阶乘算法
//方法1：
function factorialize(num) {

    if (0 === num) {
        num = 1;

    } else {
        num = num * factorialize(num - 1);
    }

    return num;
}

factorialize(5);
//3,回文算法
function palindrome(str) {
    // Good luck!
    var re = /[\W_]/g; // 或者 var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');

    var reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;

}
palindrome("eye");
//4,寻找最长的单词算法
function findLongestWord(str) {
    var arr = str.split(' ');
    var itemb = '';

    itemb = arr.reduce(function (item, curword) {

        return item.length > curword.length ? item : curword;
    });

    return itemb.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//5，设置首字母大写算法
function titleCase(str) {
    str = str.replace(/\b[\w']+\b/g, function (word) {
        return word.toLowerCase().substring(0, 1).toUpperCase() + word.toLowerCase().substring(1);
    });
    return str;
}

titleCase("I'm a little tea pot");

//6,寻找数组中的最大值算法
function largestOfFour(arr) {
    // You can do this!
    var narr = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var max = item.reduce(function (cur, next) {
            return cur > next ? cur : next;
        });
        narr.push(max);
    }
    arr = narr;
    return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
//7,确认末尾字符算法
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    //var reg = new RegExp("target");
    var reg = new RegExp("" + target + "$", "g");
    //var reg = /target$/;
    var flag = reg.test(str);
    return flag;
}

confirmEnding("Bastian", "n");
//8,重复操作算法（循环num方法或者使用数组来push，然后转为字符串）
function repeat(str, num) {
    // repeat after me
    var str1 = '';
    for (var i = 0; i < num; i++) {
        str1 += str;
    }
    return str1;
}

repeat("abc", 3);

//9,字符串截取算法
function truncate(str, num) {
    // Clear out that junk in your trunk
    var len = str.length;
    if (len > num) {
        if (num <= 3) {
            str = str.substring(0, num) + '...';
        } else {
            str = str.substring(0, num - 3) + '...';
        }
    }
    return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
//10,数组分割算法
function chunk(arr, size) {
    // Break it up.
    var len = arr.length;
    var narr = [];
    for (var i = 0; i < len / size; i++) {
        var n = size * i;
        var str = arr.splice(0, size);
        console.log(arr, n, str);
        narr.push(str);
    }
    return narr;
}

chunk(["a", "b", "c", "d"], 3);
//11,数组截断算法挑战
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3], 2);
//12,数组查询算法
function mutation(arr) {
    var str1 = arr[0].toLowerCase();
    var narr = arr[1].toLowerCase().split('');
    var flag = true;
    for (var i = 0; i < narr.length; i++) {
        var item = narr[i];
        if (str1.indexOf(item) == -1) {
            flag = false;
            break;
        }
    }

    return flag;
}

mutation(["hello", "hey"]);
//13,删除数组中特定值算法
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var narr = arr.filter(function (item) {

        return !!item;
    });
    return narr;
}

bouncer([7, "ate", "", false, 9]);
//14,去除数组中任意多个值算法
function destroyer(arr) {
    // Remove all the values
    //var args = Array.prototype.slice.call(arguments,1);
    console.log("arguments..", arguments);
    var args = arguments;
    var obj = {};
    var narr = [];
    for (var j in args) {
        var item = args[j];
        obj[item] = 1;

    }

    for (var i = 0; i < arr.length; i++) {
        var itemi = arr[i];
        if (!obj[itemi]) {
            narr.push(itemi);
        }
    }
    return narr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
//15,数组排序并插入值算法
function where(arr, num) {
    // Find my place in this sorted array.
    var ind = 0;
    console.log(arr);

    arr.forEach(function (item, index, arr) {
        if (item == num) {
            arr.splice(index, 1);
        }
    });
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    });

    console.log("ar...", arr);
    arr.forEach(function (item, index, arr) {
        if (item == num) {
            ind = index;
        }
    });
    return ind;
}

where([10, 20, 30, 40, 50], 30);
//16,位移密码算法
function rot13(str) { // LBH QVQ VG!

    str = str.replace(/\w+/g, function (word) {
        console.log(word);
        var len = word.length;
        var nstr = "";
        for (var i = 0; i < len; i++) {
            var item = word.charCodeAt(i);
            var minN = item - 13;
            var num = 0;
            var maxN = item + 13;
            if (minN < 65) {
                num = item + 13;
            } else if (maxN > 90) {
                num = item - 13;
            }

            nstr += String.fromCharCode(num);
        }
        return nstr;
    });

    return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//总结：以上16个为初级算法。
//17,区间求值算法
function sumAll(arr) {
    var len = Math.abs(arr[1] - arr[0]) + 1;
    var count = (arr[1] + arr[0]) * len / 2;
    return count;
}

sumAll([1, 4]);
//18,找出数组间差异算法
function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    arr1.sort();
    var arr = [];
    var obj = {};
    arr1.forEach(function (item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        }
    });
    arr1 = arr;
    console.log(arr);
    //arr1去重结束
    obj = {};
    arr = [];
    arr2.sort();
    arr2.forEach(function (item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        }
    });
    arr2 = arr;
    console.log(arr2);
    //arr2去重结束
    obj = {};
    arr = [];
    newArr = arr1.concat(arr2);
    console.log('newArr=', newArr);
    newArr.forEach(function (item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        } else {
            //去掉重复的元素
            arr.forEach(function (itemk, indexk) {
                console.log('itemk=', itemk, item);
                if (itemk == item) {
                    arr.splice(indexk, 1);
                }
            });
        }
    });
    newArr = arr;
    console.log(newArr);
    obj = {};
    arr = [];

    return newArr;
}

diff([1, 1, 2, 2, 3, 3, 5, 3, 5], [1, 2, 3, 3, 5, 3, 5, 3, 4, 5]); //--->4
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//19,对象搜索算法
function where(collection, source) {
    var arr = [];
    // What's in a name?
    collection.forEach(function (item, index) {
        var count = 0;
        var counts = 0;
        for (var i in source) {
            counts++;
            if (source[i] == item[i]) {
                count++;
            }
        }
        if (count == counts) {
            arr.push(item);
        }
    });
    return arr;
}

where([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
});
//20,查询替换算法
function myReplace(str, before, after) {
    var reg = new RegExp("" + before + "", "g");
    str = str.replace(reg, function (word) {
        var code = word.substring(0, 1).charAt();
        if ('A' < code && code < 'Z') {
            return after.substring(0, 1).toUpperCase() + after.substring(1);
        } else {
            return after;
        }

    });
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//21,字符配对算法
function pair(str) {
    var arr = [];
    var a = Array.prototype.map.call(str, function (x) {

        if (x == "T") {
            arr.push(["T", "A"]);
        } else if (x == "A") {
            arr.push(["A", "T"]);
        } else if (x == "G") {
            arr.push(["G", "C"]);
        } else if (x == "C") {
            arr.push(["C", "G"]);
        }
        return arr;
    });
    return arr;
}

pair("GCG");
//22,字符串查询补充算法
function fearNotLetter(str) {
    var res = '';
    var narr = [];
    var len = str.length;
    var arr = Array.prototype.map.call(str, function (item) {
        return item.charCodeAt();
    });

    if (arr[len - 1] - arr[0] == len - 1) {
        res = undefined; //说明不缺，不需要补充
        return res;
    }
    arr.reduce(function (pre, next) {
        console.log(pre, next);
        if (next - pre > 1) {
            var num = next - pre;
            for (var i = 1; i < num; i++) {
                narr.push(String.fromCharCode(pre + i));
            }

        }
        return next;
    });
    console.log("narr=", narr);
    res = narr.join('');

    return res;
}

fearNotLetter("abe"); //==》cd

//23,输入检查算法
function boo(bool) {
    // What is the new fad diet for ghost developers? The Boolean.

    return Object.prototype.toString.call(bool) == '[object Boolean]';
}

boo(null);
//24,数组去重算法
function unite(arr1, arr2, arr3) {
    var args = Array.prototype.slice.call(arguments);

    var arr = args.reduce(function (pre, next) {
        return pre.concat(next);
    });
    var tmpobj = {};
    var narr = [];
    console.log(arr, args);
    arr.forEach(function (item, index) {
        if (!tmpobj[item]) {
            tmpobj[item] = 1;
            narr.push(item);
        }
    });
    return narr;
}

unite([1, 3, 2], [1, [5]], [2, [4]]);
//es6的数组去重
// 例一
var set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
//25,html符号转实体算法
function convert(str) {
    // &colon;&rpar;
    var nstr = str.replace(/[&<>\"\']/g, function (word) {
        console.log(word, word.charCodeAt(), word == '>', arguments);
        if (word == '&') {
            return '&amp;';
        } else if (word == '>') {
            return '&gt;';
        } else if (word == '<') {
            return '&lt;';
        } else if (word == "'") {
            return '&apos;';
        } else if (word == '"') {
            return '&quot;';
        }
    });
    return nstr;
}

convert("Dolce & <>Gabbana");
convert('Stuff in "quotation marks"');
//26,字符串连接算法
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var nnstr = str.replace(/([a-z])([A-Z])/g, "$1-$2");
    console.log("nnstr=", nnstr);
    var nstr = nnstr.replace(/\w+/g, function (word) {
        console.log(word);
        return word.toLowerCase();
    });
    var nstr2 = nstr.replace(/[\s_]/g, function (word) {
        console.log(word);
        return "-";
    });
    return nstr2;
}

spinalCase("ThisIsSpinalTap");
//27,斐波纳契奇数求和算法
function sumFibs(num) {
    var arr = [1, 1];
    var a = 1; //前一个数
    var b = 1; //后一个数
    var narr = [];
    for (var i = 0; i < num; i++) {
        b = a + b;
        a = b - a;
        if (b <= num) {
            arr.push(b);
        } else {
            break;
        }

    }
    console.log("arr=", arr);
    arr.forEach(function (item, index) {
        if (item % 2 !== 0) {
            narr.push(item);
        }
    });
    var sum = narr.reduce(function (pre, next) {
        return pre + next;
    });
    console.log("narr=", narr);
    return sum;
}

sumFibs(75025);
//28,质素求和算法
function sumPrimes(num) {
    var arr = [];
    for (var i = 2; i <= num; i++) {
        var j = 2;

        while (i % j !== 0) {
            j++;

        }
        if (j == i) {
            arr.push(i);
        }
    }
    console.log(arr);
    var sum = arr.reduce(function (pre, next) {
        return pre + next;
    });
    return sum;
}

sumPrimes(10); //17
sumPrimes(977); //73156

//29,最小公倍数算法
function smallestCommons(arr) {
    arr.sort();
    var num = arr[1] - arr[0];
    var narr = [];
    for (var i = 1; i <= num; i++) {
        narr.push(arr[0] + i);
    }

    function abc(a, b) { //求两个数的最大公约数
        if (a === 0) return b;
        return abc(b % a, a);
    }

    console.log(narr);
    var scsum = narr.reduce(function (pre, next) {
        return pre * next / abc(pre, next);
    });
    return scsum;
}


smallestCommons([2, 5]);
smallestCommons([5, 4]);
//30,数组验证算法
function find(arr, func) {

    var narr = [];
    var len = arr.length;
    var count = 0;
    var res = 0;
    arr.forEach(function (item, index) {
        if (func(item)) {
            //narr.push(item);
            count++;
            console.log(item);
            if (count == 1) {
                res = item;
            }

        }

    });
    if (count === 0) {
        res = undefined;
    }
    return res;
}

find([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
}); //只取第一个，8
//31,数组取值算法
function drop(arr, func) {
    // Drop them elements.
    var narr = [];
    var count = 0;
    arr.forEach(function (item, index) {
        var res = func(item);
        console.log(item, index);
        if (!!res) {
            count++;
            if (count == 1) {
                narr = arr.slice(index);
            }

        }
    });
    return narr;
}

drop([0, 1, 0, 1], function (n) {
    return n === 1;
});
//32,数组简化算法
function steamroller(arr) {
    // I'm a steamroller, baby
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object  Array]';
    }
    var narr = [];

    function abc(varr) {
        varr.forEach(function (item, index) {
            if (Array.isArray(item)) {
                abc(item);
            } else {
                narr.push(item);
            }
        });
    }
    abc(arr);

    return narr;
}

steamroller([1, [2], [3, [[4]]]]);
//33,二进制转字符算法
function binaryAgent(str) {
    var arr = str.split(' ');

    var narr = arr.map(function (item, index) {
        var code = parseInt(item, 2);

        var char = String.fromCharCode(code);
        console.log(code, char);
        return char;
    });
    return narr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//34，数组元素判断算法
function every(collection, pre) {
    // Is everyone being true?
    var res = collection.every(function (elem, index) {
        return elem[pre];
    });
    return res;
}

every([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
//35,函数迭代可选参数算法
function add() {
    var args = Array.prototype.slice.call(arguments);
    var res = args.every(function (elem, index) {
        return Object.prototype.toString.call(elem) == '[object Number]';
    });
    if (!res) {
        res = undefined;
    } else if (args.length == 1) {
        res = function (tmp) {

            return add(args[0], tmp);
        };
    } else if (args.length == 2) {
        res = args[0] + args[1];
    }

    return res;
}

add(2, "3");
//36,判断电话号码算法
function telephoneCheck(str) {
    // Good luck!--这个正则写的有点多，可优化
    var reg = /^\d{3}-\d{3}-\d{4}|\d{3} \d{3} \d{4}|(\d)\1{9}|^[1 ]*\(\d{3}\)[ ]?\d{3}-\d{4}|1 \d{3}[ -]\d{3}[ -]\d{4}/g;

    return reg.test(str);
}



telephoneCheck("555-555-5555");
//37,集合x集算法（并集中去掉交集的部分）
function sym(args) {
    //基本思路：去重，合并，去重，递归下一个。每次只能操作前两个，递归是为了把所有参数都操作一次。
    console.log(args);

    var argsarr1 = Array.prototype.slice.call(arguments);

    function abc(argsarr) {
        var obj = {};
        var obj2 = [];
        var zarr = [];
        var tmparr = argsarr.splice(0, 2); //前两个数组
        var len = argsarr.length;
        console.log("tmparr[0]", tmparr[0]);
        //tmparr[0]去重
        for (var g = 0; g < tmparr[0].length; g++) {
            var itemg = tmparr[0][g];
            if (!obj[itemg]) {
                obj[itemg] = 1;
            } else {
                tmparr[0].splice(g, 1);
                g--;
            }
        }
        obj = {};
        console.log("tmparr[1]", tmparr[1]);
        //tmparr[1]去重
        for (var m = 0; m < tmparr[1].length; m++) {
            var itemm = tmparr[1][m];
            if (!obj[itemm]) {
                obj[itemm] = 1;
            } else {
                tmparr[1].splice(m, 1);
                m--;
            }
        }
        obj = {};
        var narr = tmparr[0].concat(tmparr[1]).sort();
        console.log("narr", narr);
        for (var i = 0; i < narr.length; i++) {
            var item = narr[i];
            if (!obj[item]) {
                obj[item] = 1;
            } else {
                obj2[item] = 1; //交集部分
            }
        }
        console.log("obj=", obj, obj2);
        for (var j = 0; j < narr.length; j++) {
            var itemj = narr[j];
            if (!obj2[itemj]) {
                zarr.push(itemj); //生成并集且去掉了交集的部分
            }
        }
        console.log(zarr, argsarr, arguments, len);

        if (len > 0) {
            argsarr.unshift(zarr);
            return abc(argsarr);
        }
        return zarr;
    }

    var abcarr = abc(argsarr1);
    return abcarr;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
//38,类及对象构建算法
var Person = function (firstAndLast) {

    var full = firstAndLast || '';
    var arr = [];
    var first = '';
    var last = '';
    var init = function (vfull) {
        arr = vfull.split(' ');
        first = arr[0];
        last = arr[1];
    };

    this.getFirstName = function () {
        return first;
    };
    this.getLastName = function () {
        return last;
    };
    this.getFullName = function () {
        return full;
    };
    this.setFirstName = function (vfirst) {
        first = vfirst;
        full = first + ' ' + last;
    };
    this.setLastName = function (vlast) {
        last = vlast;
        full = first + ' ' + last;
    };
    this.setFullName = function (vfull) {
        full = vfull;
        init(full);
    };
    init(full);
    return this;
};

var bob = new Person('Bob Ross');
bob.getFullName();
//39,数据组合求值算法
function pairwise(arr, arg) {
    var varr = [];
    var res = 0;
    var len = arr.length;
    for (var j = 0; j < len; j++) {
        var item = arr[j];
        console.log("item...", item);
        for (var i = j + 1; i < len; i++) {

            if (item + arr[i] == arg) {
                varr.push(j, i);
                arr[j] = arr[i] = arg + 1; //修改已经遍历过的值
                break;
            }

        }
    }
    if (varr.length === 0) {
        return res;
    }
    res = varr.reduce(function (pre, next) {
        return pre + next;
    });
    console.log("arr...", arr);
    return res;
}

pairwise([1, 4, 2, 3, 0, 5], 5); //=>15
//40,复杂json数据处理算法(递归很耗内存的。注意json的数据量级)
function jsonHandle(vtreeData, vknowTextJson) {
    //递归函数：优化数据，父节点去掉checkbox，只有叶子节点才有checkbox
    //vknowTextJson,默认选中的
    var data = vtreeData || [];
    var knowTextJson = vknowTextJson || [];
    var me = this;

    function abc(vdata) {
        var data = vdata || [];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            (function (item) {
                //已有知识点设置选中
                for (var k = 0, len = knowTextJson.length; k < len; k++) {
                    var itemk = knowTextJson[k];
                    if (itemk.name == item.name) {
                        item.checked = true;
                    }
                }
                //父节点去掉checkbox
                if (item.hasOwnProperty('children') && item.children.length > 0) {
                    item.nocheck = true; //父节点添加属性nocheck
                    abc(item.children);
                }
            })(item);
        }
        return data;
    }
    return abc(data);

}
jsonHandle([{
    id: '1',
    name: 'node1',
    children: [{
        id: '1-1',
        name: 'node1-1'
    }, {
        id: '1-2',
        name: 'node1'
    }]
}, {
    id: '2',
    name: 'node2'
}], [{
    id: '1-1',
    name: 'node1-1'
}]);