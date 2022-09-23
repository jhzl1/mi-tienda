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
    updateProductQuantity: (state, action: PayloadAction<UpdateProduct>) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + action.payload.quantity

          break
        }
      }
    },
    updateProduct: (state, action: PayloadAction<UpdateProduct>) => {
      for (const product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity

          break
        }
      }
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
  },
})

export const {
  addItem,
  closeCart,
  deleteProduct,
  openCart,
  resetCart,
  updateProduct,
  updateProductQuantity,
} = cartSlice.actions
