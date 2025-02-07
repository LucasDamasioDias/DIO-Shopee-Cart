async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        get subTotal() {return this.price * this.quantity},
    }
}

export default createItem