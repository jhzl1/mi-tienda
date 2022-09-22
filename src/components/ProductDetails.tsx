import { Button } from "@mui/material"
import { CartIcon } from "assets/icons/CartIcon"
import { formatMoney } from "helpers/formatMoney"
import { useState } from "react"

interface Props {
  price: number
  quantity: number
  onAddCart: (quantity: number) => void
}

export const ProductDetails = ({ price, quantity, onAddCart }: Props) => {
  const [_quantity, setQuantity] = useState(1)

  let priceWithoutDiscount = 0

  const incrementQuantity = () => setQuantity(_quantity + 1)
  const decrementQuanity = () => setQuantity(_quantity - 1)

  if (price) priceWithoutDiscount = Math.floor((price * 20) / 100) + price

  return (
    <>
      <div>
        <span className="text-2xl font-bold text-[#003890]">
          {formatMoney(price)}
        </span>{" "}
        -
        <span className="mx-1 text-md line-through decoration-red-500">
          {formatMoney(priceWithoutDiscount)}
        </span>
        |<span className="mx-1">{quantity} avaliables</span>|
        <button
          onClick={decrementQuanity}
          className="bg-gray-200  w-8 h-8 rounded-lg font-bold ml-1 disabled:cursor-not-allowed"
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          className="border w-10 h-8 px-2 rounded-lg mx-1 text-center"
          readOnly
          value={_quantity}
        />
        <button
          onClick={incrementQuantity}
          className="bg-gray-200  w-8 h-8 rounded-lg font-bold ml-1"
          disabled={quantity === _quantity}
        >
          +
        </button>
      </div>
      <div className="border-l-gray-200 pl-2">
        <Button onClick={() => onAddCart(_quantity)}>
          Add to cart <span className="ml-1" /> <CartIcon />
        </Button>
      </div>
    </>
  )
}
