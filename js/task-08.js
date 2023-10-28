const form = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  if (email === "" || password === "") {
    alert("Email and password fields are required");
  } else {
    const user = { email: email, password: password };
    console.log(user);
    form.reset();
  }
};
form.addEventListener("submit", handleSubmit);
