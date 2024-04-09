import { Faker, base, faker, pt_BR } from '@faker-js/faker';

export const customFaker = new Faker({
    locale: [pt_BR]
});

export function extractProps(object, props) {
    
    return(
        object.map(obj => {
            const extractedProps = {};
            props.forEach(prop => {
                if (obj.hasOwnProperty(prop)) {
                    extractedProps[prop] = obj[prop];
                }
            });
            return extractedProps;
        })
    );
}

export function isNumber(data) {
    for (let i = 0; i < data.length; i++) {
        const charCode = data.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            return true; 
        }
    }
    return false; 
}

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRdnBrPerson() {
    
    const fakerPersonBr = customFaker.person;
    return { firstName: fakerPersonBr.firstName(), lastName: fakerPersonBr.lastName() };
}

export function getRandonChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
export function gerarHoras(horaInicial, horaFinal, intervalo) {
    const horas = [];
    for (let hora = horaInicial; hora <= horaFinal; hora += intervalo) {
        const horaFormatada = (hora < 10 ? '0' : '') + hora;
        horas.push(horaFormatada + ':00');
    }
    return horas;
}

export function initializeMatrix(rows, cols, initialValue) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(initialValue);
        }
        matrix.push(row);
    }
    return matrix;
}