import { auth, signInWithEmailAndPassword  } from './firebase.js'

const form = document.querySelector('#login-form')

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault()

        const email = event.target.children[0].value
        const Password = event.target.children[1].value

        const result = await signInWithEmailAndPassword (auth, email, Password)

        console.log(result);
        
    } catch (error) {
        console.log('My error message', error.message);
    }
})