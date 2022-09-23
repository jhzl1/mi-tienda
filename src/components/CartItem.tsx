import { formatMoney } from "helpers/formatMoney"
import { Product } from "interfaces/Product"
import { ActionButtonsCart } from "./ActionButtonsCart"

type Props = Pick<Product, "image" | "title" | "price" | "id"> & {
  quantity: number
}

export const CartItem = ({ image, title, price, quantity, id }: Props) => {
  return (
    <div className="border-y border-y-gray-300">
      <div className="p-3  flex">
        <img src={image} className="w-10 mr-2" />
        <div className="flex justify-between items-center w-full">
          <h5 className="md:text-lg text-[#003890] block font-bold">
            {title}{" "}
          </h5>

          <span className="font-bold block text-lg text-right">
            {formatMoney(price * quantity)}{" "}
          </span>
        </div>
      </div>
      <ActionButtonsCart quantity={quantity} id={id} />
    </div>
  )
}
