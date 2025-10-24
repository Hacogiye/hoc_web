// const btn = document.getElementById("submitBtn");
// const input = document.getElementById("name");
// const prevElement = document.getElementById("prev");
// const prevName = localStorage.getItem("test")
// if (prevName){
//   prevElement.innerHTML = `<b>${prevName}</b>`
// }

// console.log(input)

// btn.addEventListener("click", () => {
//   // console.log(input.value);
//   localStorage.setItem("test", input.value)
//   document.getElementById("message").innerHTML = `<b>${input.value}</b>`

// })

const btn = document.getElementById("Submit");
const inuser = document.getElementById("username");
const inpass = document.getElementById("passwork");
const prevUser = localStorage.getItem("username");
const prevPass = localStorage.getItem("password");

if (prevPass && prevUser) {
  document.getElementById("ab1").innerHTML = `<b>${prevUser}</b>`;
  document.getElementById("ab2").innerHTML = `<b>${prevPass}</b>`;
}

btn.addEventListener("click", () => {
  localStorage.setItem("username", inuser.value);
  document.getElementById("c1_").innerHTML = `<b>${inuser.value}</b>`;
  localStorage.setItem("password", inpass.value);
  document.getElementById("c2_").innerHTML = `<b>${inpass.value}</b>`;
  if (inuser.value === "tatu@gmail.com" && inpass.value === "2006") {
    alert("Nhap ok");
    window.location.href = "success.html";
  } else {
    alert("Nhap sai tai khoan, mat khau");
  }
});
