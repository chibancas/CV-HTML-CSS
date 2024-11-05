document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm')
    const error_msg = document.getElementById('error-msg')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const msg = document.getElementById('msg').value.trim()

        if (name || msg || email) {
            error_msg.textContent = ""
            alert("Formulario enviado.")
            form.submit()
        }
        else {
            error_msg.textContent = "Error. Rellene algún campo o intentelo de nuevo más tarde.   "
        }
    })
})