export const getAge = (birthday: string) => {
    // console.log('Current year, ', new Date().getFullYear());
    return new Date().getFullYear()- new Date(birthday).getFullYear();
}