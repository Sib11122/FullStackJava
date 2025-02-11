function getOccasionMessage(occasion) {
    if (occasion === "Birthday") return "Hope you have a fantastic day!";
    if (occasion === "Anniversary") return "Wishing you a lifetime of love and happiness!";
    if (occasion === "Graduation") return "Congratulations on your success!";
    return "Best wishes!";
}

// Arrow function
const generateGreeting = (name, occasion) => {
    const message = getOccasionMessage(occasion);
    return `🎉 Hello, ${name}! 🎊\n${message}`;
};

document.getElementById("generateBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const occasion = document.getElementById("occasion").value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.querySelector(".card").textContent = generateGreeting(name, occasion);
});