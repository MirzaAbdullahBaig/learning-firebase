import { auth, createUserWithEmailAndPassword } from './firebase.js'

const form = document.querySelector('#signup-form')

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault()

        const email = event.target.children[0].value
        const Password = event.target.children[1].value

        const result = await createUserWithEmailAndPassword(auth, email, Password)

        console.log(result);

    } catch (error) {
        console.log('My error message', error.message);
    }
})