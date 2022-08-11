function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// server/catalog.json
fetch('http://myjson.dit.upm.es/api/bins/47xi')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 500);
        
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });