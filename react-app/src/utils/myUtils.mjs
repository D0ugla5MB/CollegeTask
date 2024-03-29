import { faker } from '@faker-js/faker';

const fakePerson = faker.person;
const LETTERS_RANGE = Math.floor(Math.random() * 116);

export const setSpace = (qty) => {
    let space = "";
    while(qty > 0){
        space.concat("&nbsp;");
        qty--;
    }
    return space;
} 

export function getRdnChar() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

export function getPerson() {
    const gender = fakePerson.gender();
    return (
        {
            gender: gender,
            sex: fakePerson.sexType(),
            name: [fakePerson.firstName(gender), fakePerson.middleName(), fakePerson.lastName()],
            age: rng(15, 100),
            others: [null]
        }
    );
}

export function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}