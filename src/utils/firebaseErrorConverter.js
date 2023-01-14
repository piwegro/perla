/** Converts firebase error codes to readable messages */
const convertFirebaseError = error => {
    switch (error.code) {
        case 'auth/user-not-found':
            return 'Nie znaleziono użytkownika'
        case 'auth/wrong-password':
            return 'Nieprawidłowe hasło'
        case 'auth/invalid-email':
            return 'Nieprawidłowy adres e-mail'
        case 'auth/email-already-exists':
            return 'Adres e-mail jest już zajęty'
        case 'auth/weak-password':
            return 'Hasło musi mieć co najmniej 6 znaków'
        case 'auth/too-many-requests':
            return 'Zbyt wiele prób logowania. Spróbuj ponownie później lub zresetuj swoje hasło, aby zalogować się od razu'
        default:
            return 'Wystąpił błąd'
    }
}

export default convertFirebaseError
