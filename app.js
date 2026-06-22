
const dollars = [100, 150, 200, 250, 300, 350];
const rate = 89; // Текущий курс доллара
const soms = dollars.map(usd => usd * rate);
console.log('Конвертация в сомы:', soms);

const grades = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
const euroGrades = grades.map(grade => {
    if (grade === 5) return 'A';
    if (grade === 4) return 'B';
    if (grade === 3) return 'C';
    return grade;
});
console.log('Европейские оценки:', euroGrades);

const names = ["анна", "ДЕНИС", "АлТыНай", "аЛИЯ", "ФёДоР", "ПЁТр"];
const capitalizedNames = names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});
console.log('Имена:', capitalizedNames);

const tags = ["div", "span", "h1", "article", "section", "a", "li"];
const htmlTags = tags.map(tag => `<${tag}></${tag}>`);
console.log('HTML теги:', htmlTags);

const carNumbers = ["01 KG 123 ABC", "02 KG 456 DEF", "03 KG 789 GHI", "01 KG 321 JKL", "05 KG 654 MNO", "06 KG 987 PQR", "07 KG 111 STU", "01 KG 222 VWX", "09 KG 333 YZA", "01 KG 444 BCD"];
const bishkekNumbers = carNumbers.filter(num => num.startsWith("01"));
console.log('Номера Бишкека:', bishkekNumbers);

const items = ["div", "span", "h1", "test", "article", "block", "section", "a", "dif", "li"];

const validTags = ["div", "span", "h1", "article", "section", "a", "li", "p", "button"];

const onlyTags = items.filter(item => validTags.includes(item));
const notTags = items.filter(item => !validTags.includes(item));

console.log('Только теги:', onlyTags);
console.log('Не теги:', notTags);