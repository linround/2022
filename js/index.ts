// 从大到小
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            let cur = arr[j]
            if(cur<arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = cur
            }
        }
    }
    return arr
}
let arr = [1,2,3,4,2,3,4,7,2,6]
console.log(bubbleSort(arr))