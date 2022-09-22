import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemToCart, ProductOnCart } from "interfaces/Product"
import uuid from "react-uuid"
interface CartSlice {
  totalCart: number
  products: ProductOnCart[]
  isOpenCart: boolean
}

const initialState: CartSlice = {
  totalCart: 0,
  products: [],
  isOpenCart: false,
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    resetCart: () => initialState,
    addItem: (state, action: PayloadAction<ItemToCart>) => {
      state.totalCart = state.totalCart + action.payload.price
      state.products.push({
        id: uuid(),
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
  },
})

export const { resetCart, addItem, openCart, closeCart } = cartSlice.actions
