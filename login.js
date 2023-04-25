// const loginForm = document.getElementById("login-form");
// const signupForm = document.getElementById("signup-form");

// // Event listener for login form submission
// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const email = loginForm.email.value;
//     const password = loginForm.password.value;

//     // Send a POST request to the server to validate the login credentials
//     fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     })
//         .then((response) => {
//             if (response.ok) {
//                 // Redirect the user to the homepage on successful login
//                 window.location.href = "/homepage";
//             } else {
//                 // Reload the page if login fails
//                 window.location.reload();
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// });

// // Event listener for signup form submission
// signupForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Get user inputs from the form
//     const username = signupForm.username.value;
//     const email = signupForm.email.value;
//     const password = signupForm.password.value;

//     // Create a new user object with the form data
//     const newUser = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Send a POST request to the server to create a new user
//     fetch("/api/signup", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newUser)
//     })
//         .then(function (response) {
//             if (response.ok) {
//                 // If the response is ok, the user was created successfully
//                 // Display a success message to the user
//                 alert("User created successfully!");
//                 // Reset the form
//                 signupForm.reset();
//             } else {
//                 // If the response is not ok, the user could not be created
//                 // Display an error message to the user
//                 alert("Unable to create user. Please try again.");
//             }
//         })
//         .catch(function (error) {
//             // If there is an error, display an error message to the user
//             alert("An error occurred. Please try again.");
//         });
// });

// // Event listener for login form submission
// loginForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Get user inputs from the form
//     const email = loginForm.email.value;
//     const password = loginForm.password.value;

//     // Create a new login object with the form data
//     const login = {
//         email: email,
//         password: password
//     };

//     // Send a POST request to the server to login the user
//     fetch("/api/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(login)
//     })
//         .then(function (response) {
//             if (response.ok) {
//                 // If the response is ok, the user was logged in successfully
//                 // Redirect the user to the homepage
//                 window.location.href = "/homepage";
//             } else {
//                 // If the response is not ok, the user could not be logged in
//                 // Reload the page to try again
//                 location.reload();
//             }
//         })
//         .catch(function (error) {
//             // If there is an error, display an error message to the user
//             alert("An error occurred. Please try again.");
//         });
// });

// for button hide and show function
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
  





