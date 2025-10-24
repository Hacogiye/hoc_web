let fullName = "Ta Tuan Tu",
  birthYear = 2006,
  isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear);
console.log(
  `Tuoi = ${currentYear} - ${birthYear} = ${currentYear - birthYear}`
);

if (isStudent){
    console.log(`Ban la sinh vien`)
}else console.log(`Ban khong la sinh vien`)