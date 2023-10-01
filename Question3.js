let array =[1,2,3,4,5]
function calculateSum (array){
    var sum =0;
    for(var i= 0 ;i<array.length;i++){
        sum += array[i];
}
return sum;}
console.log("The Sum of the Array is "+calculateSum(array));
