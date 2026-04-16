document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.defaultPrevented(); // stops page reload

    // get users name 
    let name = document.getElementById("name").value;

    // display message
    document.getElementById("message").textContent =
        `Thank You, ${name}! You have registered.`;
    });



    