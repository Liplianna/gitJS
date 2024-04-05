let store = "Xstore", name = "Incognito";
console.log(`Name:${store} ${name}`)

let StoreDescription = {
    goods: 10000,
    employees: ["Jack", "Tom", "Ralf"],
    products: [
        { name: "MobilePhone", price: 1000 },
        { name: "HeadPhones", price: 300 },
        { name: "Watch", price: 100 }

    ],
    open: true
}

console.log(StoreDescription.products);
for (const product of StoreDescription.products) {
    console.log(product.name);
};
console.log(StoreDescription.open);