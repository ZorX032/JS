// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '100');

const recipesDiv = document.getElementById('recipes');

fetch(url)
    .then((response) => response.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipeDiv');

            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const arrDiv = document.createElement('div');
                    const h3 = document.createElement('h3');
                    h3.innerText = recipeKey;
                    const ol = document.createElement('ol');
                    const arr = recipe[recipeKey];

                    for (const arrElement of arr) {
                        const li = document.createElement('li');
                        li.innerText = arrElement;
                        ol.append(li);
                    }
                    arrDiv.append(h3, ol);
                    recipeDiv.append(arrDiv);

                } else {
                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                    recipeDiv.append(keyDiv);
                }

            }
            let img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img);
            recipesDiv.append(recipeDiv);
        }
    });



