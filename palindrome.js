let num = 45854;
let original_num = num;

let rem;
let rev = 0;

while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    rev = (rev * 10) + rem;
}

if (original_num == rev) {
    console.log("The number is a palindrome")
}
else {
    console.log("The number is not a palindrome")
}
