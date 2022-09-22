import { formatMoney } from "helpers/formatMoney"
import { ProductOnCart } from "interfaces/Product"

type Props = ProductOnCart

export const CartItem = ({ image, title, price, quantity }: Props) => {
  return (
    <div className="p-3 border-y border-y-gray-300 flex ">
      <img src={image} className="w-10 mr-2" />
      <div>
        <p className="text-[#003890] font-bold">{title}</p>
        <p>
          {formatMoney(price)} X{quantity} ={" "}
          <span className="font-bold text-lg">
            {formatMoney(price * quantity)}{" "}
          </span>
        </p>
      </div>
    </div>
  )
}
