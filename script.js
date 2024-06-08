const phoneBook = [];

function validateName(name) {
  return /^[A-Za "+"-z]+$/.test(name);
}

function validatePhone(phone) {
  return /^[0-9]{11}$/.test(phone);
}

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

function addEntry() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  let isValid = true;

  if (!validateName(name)) {
    alert("Invalid name. Please use alphabetic characters only.");
    isValid = false;
  }

  if (!validatePhone(phone)) {
    alert("Invalid phone number. Please enter a 10-digit number.");
    isValid = false;
  }

  if (!validateEmail(email)) {
    alert("Invalid email address.");
    isValid = false;
  }

  if (isValid) {
    phoneBook.push({ name, phone, email });
    displayPhoneBook();
    clearInputFields();
  }
}

function displayPhoneBook() {
  const phoneBookList = document.getElementById("phoneBook");
  phoneBookList.innerHTML = "";
  phoneBook.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${entry.name}, Phone: ${entry.phone}, Email: ${entry.email}`;
    phoneBookList.appendChild(listItem);
  });
}

function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}
