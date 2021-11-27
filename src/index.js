module.exports = reverse = n => +String(n).split('').reverse().filter(el => el != '-').join('');

