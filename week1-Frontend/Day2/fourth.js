document.getElementById("fetchBtn").addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();//takes  input from the user and removes any whitespace from the beginning and end of the string
    const errorMsg = document.querySelector(".error");//selects the first element with the class name "error"
    const profile = document.querySelector(".profile");//selects the first element with the class name "profile"

    if (!username) {//if the username is empty
        errorMsg.textContent = "Please enter a GitHub username!";
        profile.style.display = "none";
        return;
    }

    errorMsg.textContent = ""; // Clear previous errors

    try {//this is try block which contains the code that might throw an exception
        const response = await fetch(`https://api.github.com/users/${username}`);//fetches the data from the url

        if (!response.ok) {//if the response is not ok then throw an error
            throw new Error("User not found! Please check the username.");
        }

        const data = await response.json();//converts the response to json format

        // Update profile UI
        document.getElementById("avatar").src = data.avatar_url;//get the avatar url from the data and set it to the src attribute of the img tag
        document.getElementById("name").textContent = data.name || "No name provided";//get the name from the data and set it to the text content of the name element
        document.getElementById("bio").textContent = data.bio || "No bio available";//get the bio from the data and set it to the text content of the bio element
        document.getElementById("followers").textContent = data.followers;//get the followers from the data and set it to the text content of the followers element

        profile.style.display = "block"; // Show profile
    } catch (error) {
        errorMsg.textContent = error.message;
        profile.style.display = "none"; // Hide profile if error
    }
});