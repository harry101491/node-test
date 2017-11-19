const list = [
    "Harshit",
    "Pareek",
    "Svarmit",
    "Pasricha",
    "Bhagwat",
    "Singh",
    "Bisht"
];

let interval = setInterval(() => {
    let random = Math.floor(Math.random() * list.length);
    // console.log("the random value is:" +random);
    console.log(list[random]);
}, 1000);

process.stdin.on("data", (data) => {
    console.log("Entered to stop the process:", `${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});