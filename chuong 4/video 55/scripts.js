const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("test")
if (prevName){
  prevElement.innerHTML = `<b>${prevName}</b>`
}

console.log(input)

btn.addEventListener("click", () => {
  // console.log(input.value);
  localStorage.setItem("test", input.value)
  document.getElementById("message").innerHTML = `<b>${input.value}</b>`

})