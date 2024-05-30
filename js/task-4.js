const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;

    console.log(elements);

    if (elements.email.value === "" || elements.password.value === "") {
        alert('All form fields must be filled in')
    } else {
        const dataInput = {
            Email: elements.email.value,
            Password: elements.password.value
        }

        console.log(dataInput);
        form.reset();
    }

}
