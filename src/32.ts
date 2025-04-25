let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Enter a number: "));
    if (isNaN(num)) {
        alert("Please enter a valid integer.");
    } else {
        sum += num;
    }
}
alert(`The sum of the numbers is ${sum}.`);
