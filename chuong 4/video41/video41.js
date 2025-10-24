const ages = [1, 2, 3, 4, 5, 10, 5]

const agesx2 = ages.map((value , index)=>{
    return value * 2;
})

console.log(agesx2)

const check = ages.filter((value, index) => {
    return value > 2;
})

console.log(check)

