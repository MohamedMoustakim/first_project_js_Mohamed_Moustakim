// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.





// 1 : create database user

let userDataBase  = [];



//  2: create coditions to signup
function apitalize(change) {
    return change.charAt(0).toUpperCase() + change.slice(1).toLowerCase();
}

function viewName(name) {
    name = name.trim();
    if (name.length < 5 || /[^a-zA-Z\s]/.test(name)) return false;

    const parts = name.split(" ");
    return parts.every(part => /^[A-Z][a-z]+$/.test(apitalize(part)));
}




function viewEmail(email) {
    email = email.trim().toLowerCase();
    if (email.includes(" ") || email.length < 10) return false;
    const atSplit = email.split("@");
    if (atSplit.length !== 2) return false;

    const exists = userDataBase.some(user => user.email === email);
    return !exists;
}





function isValidAge(age) {
    age = age.trim();
    if (!/^\d+$/.test(age)) return false;
    if (age.length === 0 || age.length >= 3) return false;
    return true;
}





function viewPassword(password) {
    password = password.trim();
    if (password.length < 7 || /\s/.test(password)) return false;
    if (!/[@#\-\+\*\/]/.test(password)) return false;
    return true;
}




function signup() {
    let name = prompt("udkhul asmuk alkamil (u.a. Mohamed Moustakim):").trim();
    if (!viewName(name)) {
        alert("Invalid name. Use capital letters, no special characters, and at least 5 characters.");
        return;
    }
    name = name.split(" ").map(apitalize).join(" ");

    let email = prompt("adkhul alkhasa bik email address:").trim().toLowerCase();
    if (!viewEmail(email)) {
        alert("Invalid or already used email. Must contain '@', no spaces, and be unique.");
        return;
    }

    let age = prompt("adkhul alkhasa bik age:").trim();
    if (!isValidAge(age)) {
        alert("Invalid age. Must be digits only and between 1-99.");
        return;
    }

    let password = prompt("iinsha a password:").trim();
    if (!viewPassword(password)) {
        alert("Invalid password. Must be at least 7 characters, no spaces, and contain at least one special character (@, #, -, +, *, /).");
        return;
    }

    let confirm = prompt("takid alkhasi bik password:").trim();
    if (password !== confirm) {
        alert("Passwords do not match. Sign up blocked.");
        return;
    }

    // 3: Save database user
    userDataBase.push({ name, email, age, password });
    alert("Sign up successful!");
}



// 4 : create conditions of log in
function login() {
    let email = prompt("Enter your email:").trim().toLowerCase();

    const user = userDataBase.find(user => user.email === email);
    if (!user) {
        alert("Email not found.");
        return;
    }

    let password = prompt("Enter your password:").trim();
    if (user.password !== password) {
        alert("Incorrect password.");
        return;
    }

    userAccount = user;
    alert(`Login successful! Welcome, ${user.name}.`);
}
// 5 : create conditions changed password


function yataghayarPassword() {
    let email = prompt("adkhul baridak al'iiliktirunia email:").trim().toLowerCase();
    const user = userDataBase.find(user => user.email === email);
    if (!user) {
        alert("Email lam yatima aleuthur ealayh.");
        return;
    }

    let oldPassword = prompt("'adkhul alhalia alkhasa bik password:").trim();
    if (user.password !== oldPassword) {
        alert("tayaar ghayr sahih password.");
        return;
    }

    let newPassword = prompt("adkhul aljadid alkhasu bik password:").trim();
    if (!viewPassword(newPassword)) {
        alert("Invalid new password. Must be at least 7 characters, no spaces, and include one special character (@, #, -, +, *, /).");
        return;
    }

    let confirmPassword = prompt("takid aljadid alkhasi bik password:").trim();
    if (newPassword !== confirmPassword) {
        alert("Passwords la tatatabaqu. tama 'iilgha' taghyir kalimat almururi.");
        return;
    }

    user.password = newPassword;
    alert("Password tama altaghyir binajah.");
}



function aikhtariChoose() {
    while (true) {
        let action = prompt("Choose: sign up / login / change-password / exit").trim().toLowerCase();

        if (action === "sign up") {
            alert("min fadlik qum bimil' namudhaj altasjili.");
            signup();

        } else if (action === "login") {
            alert("tama tahdid tasjil aldukhul.");
            login()
        } else if (action === "change-password") {
            alert("tama tahdid taghyir kalimat almurur.");
            changePassword()
        } else if (action === "exit") {
            alert("alkhuruj...");
            break;

        } else {
            alert("khiar ghayr salih.");
        }
    }
}

aikhtariChoose();

//  *  After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.