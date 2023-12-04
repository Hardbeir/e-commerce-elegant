fetch('https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D'
    )
    .then(res => {
        if (!res.ok) {
            return Promise.reject('4xx or 5xx problem');
        }
        
        return res.json();
    })

    .then(data => {
        
        console.log(data.data.products.edges); 


        const html = data.data.products.edges.map(product => {
            return `
            <div class="items">
                <img src="${product.node.featuredImage.url}" alt="${product.title}"/>
                
                <div class="content">
                    <p>${product.node.title} </p>
                    <p></p>
                </div>

            </div>
            `
        })
        .join("");

        console.log(html);
        document
        .querySelector("#products").insertAdjacentHTML("afterbegin", html)

    })

    .catch(error => console.log(error));
