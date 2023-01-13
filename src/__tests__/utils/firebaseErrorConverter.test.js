import convertFirebaseError from '../../utils/firebaseErrorConverter'

test('check conversion with valid value', () => {
    expect(convertFirebaseError({ code: 'auth/user-not-found' })).toBe('Nie znaleziono użytkownika')
})

test('check conversion with invalid value', () => {
    expect(convertFirebaseError({ code: 'error' })).toBe('Wystąpił błąd')
})
