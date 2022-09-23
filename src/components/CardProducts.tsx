import {
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material"
import { formatMoney } from "helpers/formatMoney"
import { useCart } from "hooks"
import { Product } from "interfaces/Product"
import { useNavigate } from "react-router-dom"

type Props = Product

export const CardProduct = ({ title, image, rating, price, id }: Props) => {
  const { rate } = rating

  const { handleAddToCart } = useCart()

  const priceWithoutDiscount = Math.floor((price * 20) / 100) + price

  const navigate = useNavigate()

  return (
    <Card className="flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center my-2">
        <img src={image} className="max-h-80 mb-4" />
        <Rating name="read-only" value={Math.ceil(rate)} readOnly />
      </div>

      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="text-xl font-bold text-[#003890]">
            {formatMoney(price)}
          </span>{" "}
          -
          <span className="ml-1 text-md line-through decoration-red-500">
            {formatMoney(priceWithoutDiscount)}
          </span>
        </Typography>
      </CardContent>
      <CardActions className="">
        <Button
          size="small"
          color="secondary"
          onClick={() =>
            handleAddToCart({
              id,
              image,
              price,
              quantity: 1,
              title,
            })
          }
        >
          Add to cart
        </Button>
        <Button size="small" onClick={() => navigate(`/products/${id}`)}>
          See details
        </Button>
      </CardActions>
    </Card>
  )
}
