const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");


const myTextElement = document.getElementById("myText");

console.log(myBtnElement, myTextElement)

myBtnElement.addEventListener("click", () => {
    console.log("my click my button")
    myTextElement.innerHTML = "<i><b>Ai lớp iu</b></i>";
})

backBtnElement.addEventListener("click", () => {
  console.log("my click my button");
  myTextElement.innerText = "video 52";
});