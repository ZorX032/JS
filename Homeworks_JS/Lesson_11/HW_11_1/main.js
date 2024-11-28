// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.



const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);


        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-box');
            const divInfo = document.createElement('div');
            divInfo.classList.add('divInfo');
            divInfo.innerText = `
                    "discountedTotal": ${cart.discountedTotal},
                    "total": ${cart.total},
                    "totalProducts": ${cart.totalProducts},
                    "totalQuantity": ${cart.totalQuantity},
                    "userId": ${cart.userId},
                    `

            const details = document.createElement('details');

            for (const product of cart.products) {
                const li = document.createElement('li');
                const productInfo = document.createElement('p');
                productInfo.innerText = `
                     "Discount Percentage": ${product.discountPercentage},
                     "Discounted Total": ${product.discountedTotal},
                     "ID": ${product.id},
                     "Price": ${product.price},
                     "Quantity": ${product.quantity},
                     "Title": ${product.title},
                     "Total": ${product.total}
                
                `;

                const img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(productInfo, img);
                details.append(li);
            }

            div.append(divInfo, details);
            cartsDiv.append(div);
        }


    });

