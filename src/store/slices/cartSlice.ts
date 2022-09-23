import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemToCart, UpdateProduct } from "interfaces/Product"
interface CartSlice {
  products: ItemToCart[]
  isOpenCart: boolean
}

const initialState: CartSlice = {
  products: [],
  isOpenCart: false,
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    resetCart: () => initialState,
    addItem: (state, action: PayloadAction<ItemToCart>) => {
      state.products.push({
        id: action.payload.id,
        image: action.payload.image,
        price: action.payload.price,
        quantity: action.payload.quantity,
        title: action.payload.title,
      })
    },
    openCart: (state) => {
      state.isOpenCart = true
    },
    closeCart: (state) => {
      state.isOpenCart = false
    },
    updateQuantityProduct: (state, action: PayloadAction<UpdateProduct>) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + action.payload.quantity

          break
        }
      }
    },
  },
})

export const {
  addItem,
  closeCart,
  openCart,
  resetCart,
  updateQuantityProduct,
} = cartSlice.actions
