function checkPassword() {
    // Get the input value and convert it to lowercase for case-insensitivity
    const input = document.getElementById('passwordInput').value.toLowerCase();
    const errorMessage = document.getElementById('errorMessage');

    // DEFINE YOUR 5 UNIQUE PASSWORDS AND THEIR TARGET PAGES HERE
    const passwords = {
        "pihu": "person1.html", // Password for Person 1
        "himachalibihari": "person2.html",  // Password for Person 2
        "anjuuu": "person3.html",    // Password for Person 3
        "goodmorningmaam": "person4.html",   // Password for Person 4
        "ashirbad": "person5.html",  // Password for Person 5
        "bro": "person6.html",    // Password for Person 3
        "modon": "person7.html",   // Password for Person 4
        "mithi": "person8.html"  
    };

    // Check if the entered password exists in the list
    if (passwords[input]) {
        // Correct password - redirect the user
        window.location.href = passwords[input];
    } else {
        // Incorrect password - show error
        errorMessage.textContent = "❌ Incorrect code. Please check your spelling or contact me!";
        document.getElementById('passwordInput').value = ''; // Clear input
    }
}