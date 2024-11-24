// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
//  Інфу НЕ виводити в консоль, а малювати в DOM

//створюємо масив
let sessionsTime = [];
//умова, якщо в масиві щось є
if (localStorage.getItem('sessionsTime')){
    //то перетворюємо його
   sessionsTime = JSON.parse(localStorage.getItem('sessionsTime'));
}
//пушимо дату у масив
sessionsTime.push(new Date());
// записуэмо в локальне сховище
localStorage.setItem('sessionsTime', JSON.stringify(sessionsTime));

