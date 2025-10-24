const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("myText");

console.log(myBtnElement, myTextElement, backBtnElement)


myBtnElement.addEventListener("click", () => {
  myTextElement.innerText = "hello";
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "pink";
  myBtnElement.classList.add("class", "new")
  alert("adu")
})

backBtnElement.addEventListener("click", () => {
  console.log("back ve");
  myTextElement.innerText = "Video 50";
  myBtnElement.classList.remove("class")
})