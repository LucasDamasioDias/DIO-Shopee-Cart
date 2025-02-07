import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []

console.log("Welcome to your Shopee Cart!")

const item1 = await createItem("Thor Hammer", 3.99, 5)
const item2 = await createItem("Spider Web", 1.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.deleteItem(myCart, item1.name)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)