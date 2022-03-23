arr = [1000]
arr.__ob__
function react(arr){
    for(let key in arr){
        defineProperty(arr,key,arr[key])
    }
}
function defineProperty(obj,key,val) {
    Object.defineProperty(arr,key,{
        get(){},
        set(newVal){

        }
    })
}
react(arr)

new Proxy()