// let arr=[1,2,3,4,5]
// // 打乱数组
// function fn(arr){
//     let newArr = [],arrLen = arr.length,map = {},count=0
//     while(count<arrLen){
//         let index = Math.floor(Math.random()*arrLen)
//         // if()
//     }
//     return newArr
// }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
// 返回两个值区间的任意一个数字 整数
function returnNum(min,max){
    let length = max - min + 1
    let value = Math.floor(Math.random() * length)
    return value + min
}
function vilidation(arr,min,max){
    let nums = arr.length
    let map = {},overflow = false
    for(let i=0;i<arr.length;i++){
        let item = arr[i]
        if(item < min || item> max){
            overflow = true
            break
        }
        if(map[item]){
            let count = ++map[item].count
            map[item].rate = count/nums
        } else {
            map[item] = {
                count: 1,
                rate: 1/nums
            }
        }
    }
    return {
        map,
        overflow
    }
}

var Solution = function(nums) {
    this.nums = nums;
    this.original = nums.slice();

};

Solution.prototype.reset = function() {
    this.nums = this.original.slice();
    return this.nums;
};

Solution.prototype.shuffle = function() {
    const shuffled = new Array(this.nums.length).fill(0);
    const list = [];
    this.nums.forEach((num) => list.push(num));
    for (let i = 0; i < this.nums.length; ++i) {
        const j = Math.random() * list.length;
        console.log(j)
        shuffled[i] = list.splice(j, 1);
    }
    this.nums = shuffled.slice();
    return this.nums;
};


let arrs = [],min = -1,max=3
for(let i=1;i<10000;i++){
    arrs.push(returnNum(min,max))
}
// var so = new Solution(arrs)
vilidation(arrs,-1,3)
// vilidation(so.shuffle(),min,max)