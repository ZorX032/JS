// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// !!!!!!!!!!!! Це завдання я переписав з відео-розбору, ще поки не зрозумів як це працює.!!!!!!!!!!!!!!!


Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};

[11, 22, 33].myForEach((x) => console.log(x));


Array.prototype.myFiler = function (predicate){
    const arr = [];
    for (const item of this) {
        if (predicate(item)){
            arr.push(item);
        }
    }
    return arr;
}




