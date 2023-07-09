export default class CartService {

    cart = [];
    products = [
        {
            id: 1,
            name: 'Red Skull Helmet',
            price: 5,
        },
        {
            id: 2, 
            name: 'SCARPA Tiger',
            price: 5,
        },
        {
            id: 3,
            name: 'SCARPA Aqua',
            price: 5,
        },
        {
            id: 4,
            name: 'Pantalones Cortos Rain',
            price: 5,
        },
        {
            id: 5,
            name: 'Pantalones largos Geminis',
            price: 5,
        },
        {
            id: 6,
            name: 'Pantalones Largos Wild Forest',
            price: 5,
        }
    ];
    constructor() {}

    addProduct(product) {
        this.cart.push(product);
    }

    removeProduct(id) {
        const productToRemoveIndex = this.cart.findIndex((product) => product.id === id);
        this.cart.splice(productToRemoveIndex, 1); 
    }

    printCart() {
        console.log(this.cart);
    }
};