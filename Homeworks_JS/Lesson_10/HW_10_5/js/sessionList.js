let sessionsTime = JSON.parse(localStorage.getItem('sessionsTime'));
for (const sessionsTimeElement of sessionsTime) {
    let div = document.createElement('div');
    div.innerText = sessionsTimeElement.toString();
    document.body.append(div);

}