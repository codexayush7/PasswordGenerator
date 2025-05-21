const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let chars = "";
    if (uppercase.checked) chars += upperChars;
    if (lowercase.checked) chars += lowerChars;
    if (numbers.checked) chars += numberChars;
    if (symbols.checked) chars += symbolChars;

    if (chars.length === 0) {
        passwordInput.value = "Select at least one option!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    passwordInput.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.textContent = "✅";
    setTimeout(() => (copyBtn.textContent = "📋"), 1000);
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);