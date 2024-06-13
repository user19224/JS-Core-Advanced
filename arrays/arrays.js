
let arr = [23,32,12,55,67];
function arr_rise(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] += arr[i]*0.1; 
    }
    return arr;

}
console.log(arr_rise(arr));