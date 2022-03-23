let getDouble = n => n*2
let obj = {}
let count = 1
let double = getDouble(count)
Object.defineProperty(obj,'count', {
    get(){
        return count
    },
    set (val){
        count = val
        double = getDouble(val)
    }
})
console.log(double) // 打印2
obj.count = 2
console.log(double) // 打印4 有种自动变化的感觉


let arr = [1,2]
function react(obj,k,val){
    Object.defineProperty(obj,k,{
        get(){
            console.log('kkkkkkkkkkk--get')
            return val
        },
        set(value){
            console.log('kkkkkkkkkkkk---set')
            val = value
        }
    })
}
for(let k of arr) {
    react(arr,k,arr[k])
}
let objj = {
    name:'llllll'
}
for(let key in objj) {
    react(objj,key,objj[key])
}