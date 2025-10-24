const arr = [ 8 , 3, 9 , "alo"]

console.log(arr[1])
console.log(arr)

arr.push(true)
console.log(arr)

arr.unshift("adu")
console.log(arr)

arr.pop()
arr.shift()
console.log(arr);

arr.forEach(function(test,  i){
    console.log(i , test)
});
