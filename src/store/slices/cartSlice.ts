import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "interfaces/Product"

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    resetCart: () => initialState,
  },
})

export const { resetCart } = cartSlice.actions
