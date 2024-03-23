import { faker } from '@faker-js/faker';
const fakePerson = faker.person;

export function getPerson(ageMin, ageMax){
    return ({
        gender: fakePerson.gender(),
        sex: fakePerson.sex(),
        firstName: fakePerson.firstName(gender),
        midName: fakePerson.middleName(),
        lastName: fakePerson.lastName(),
        age: rng(ageMin, ageMax)
    });
}

export function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}