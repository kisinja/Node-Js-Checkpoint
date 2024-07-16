const generatePassword = require('generate-password');

const generateRandomPassword = () => {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludesSimilarCharacters: true
    });

    return password;
};

const randomPassword = generateRandomPassword();
console.log('Random Password: ', randomPassword);