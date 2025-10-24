const s1 = {
    name: "ban",
    price: 10,
    inStock: true
};

const s2 = {
  name: "ghe",
  price: 15,
  inStock: true,
};

const s3 = {
  name: "cua",
  price: 20,
  inStock: false,
};

const s4 = {
  name: "bep",
  price: 26,
  inStock: true,
};

const s5 = {
  name: "chen",
  price: 5,
  inStock: false,
};

s2.price = 150;
const s6 = {
    name: "dua",
    print: 5,
    inStock: true
}
const arr = [s1, s2, s3, s4, s5];

arr.push(s6)
for (let value in arr){
    console.log(arr[value])
}

arr.forEach((value, index) => {
    value.name;
})

const arr_new = arr.map((value, index) => {
    return value.price;
})

console.log(arr_new)

const check = arr.filter((value, index) => {
    return value.inStock === true;
})

console.log(check)