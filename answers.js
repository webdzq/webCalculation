//1,翻转字符串算法
//方法1：
function reverseString(str) {
    var arr = str.split('');
    str = arr.reverse().join('');
    return str;
}

reverseString("hello");
//2,翻转字符串算法
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

    itemb = arr.reduce(function(item, curword) {

        return item.length > curword.length ? item : curword;
    });

    return itemb.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//5，设置首字母大写算法
function titleCase(str) {
    str = str.replace(/\b[\w']+\b/g, function(word) {
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
        var max = item.reduce(function(cur, next) {
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
//8,重复操作算法
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

chunk(["a", "b", "c", "d"], 2);
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
    var narr = arr.filter(function(item) {

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

    arr.forEach(function(item, index, arr) {
        if (item == num) {
            arr.splice(index, 1);
        }
    });
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
    });

    console.log("ar...", arr);
    arr.forEach(function(item, index, arr) {
        if (item == num) {
            ind = index;
        }
    });
    return ind;
}

where([10, 20, 30, 40, 50], 30);
//16,位移密码算法
function rot13(str) { // LBH QVQ VG!

    str = str.replace(/\w+/g, function(word) {
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
    arr1.forEach(function(item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        }
    });
    arr1 = arr;
    console.log(arr);
    obj = {};
    arr = [];
    arr2.sort();
    arr2.forEach(function(item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        }
    });
    arr2 = arr;
    console.log(arr2);
    obj = {};
    arr = [];
    newArr = arr1.concat(arr2);
    newArr.forEach(function(item, index) {
        if (!obj[item]) {
            obj[item] = 1;
            arr.push(item);
        } else {
            arr.forEach(function(itemk, indexk) {
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

diff([1, 1, 2, 2, 3, 3, 5, 3, 5], [1, 2, 3, 3, 5, 3, 5, 3, 4, 5]);
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//19,对象搜索算法
function where(collection, source) {
    var arr = [];
    // What's in a name?
    collection.forEach(function(item, index) {
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
    str = str.replace(reg, function(word) {
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
    var a = Array.prototype.map.call(str, function(x) {

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
    var arr = Array.prototype.map.call(str, function(item) {
        return item.charCodeAt();
    });


    arr.reduce(function(pre, next) {
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
    if (arr[len - 1] - arr[0] == len - 1) {
        res = undefined;
    }
    return res;
}

fearNotLetter("abce");
