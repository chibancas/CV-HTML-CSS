document.addEventListener('DOMContentLoaded', () => {
    const initTabName = document.title

    window.addEventListener('blur', () => {
        document.title = '¡Eh Vuelve aquí!'
    })

    window.addEventListener('focus', () => {
        document.title = initTabName
    })
})