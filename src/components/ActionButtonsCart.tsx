import { IconButton } from "@mui/material"
import { TrashIcon } from "assets/icons/TrashIcon"
import { useCart } from "hooks"

interface Props {
  quantity: number
  id: number
}
export const ActionButtonsCart = ({ id, quantity }: Props) => {
  const { updateProductOfCart, handleDeleteProduct } = useCart()

  const incrementQuantity = () => updateProductOfCart(id, ++quantity)
  const decrementQuanity = () => updateProductOfCart(id, --quantity)

  return (
    <div className="flex justify-between items-center py-1">
      <div>
        Quantity:
        <button
          onClick={decrementQuanity}
          className="bg-gray-200  w-8 h-8 rounded-lg font-bold ml-1 disabled:cursor-not-allowed"
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          className="border w-10 h-8 px-2 rounded-lg mx-1 text-center"
          value={quantity}
          readOnly
        />
        <button
          onClick={incrementQuantity}
          className="bg-gray-200  w-8 h-8 rounded-lg font-bold ml-1"
        >
          +
        </button>
      </div>
      <IconButton aria-label="cart" onClick={() => handleDeleteProduct(id)}>
        <TrashIcon />
      </IconButton>
    </div>
  )
}
