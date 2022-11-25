import { Stack, Button } from "react-bootstrap";
import {
  DetailedCartItem,
  useCartContext,
} from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  key: number;
  item: DetailedCartItem;
};
const CartItem = ({ key, item }: CartItemProps) => {
  const { name, id, imgUrl, price, quantity } = item;
  const { removeCartItem } = useCartContext();
  return (
    <>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-between border mb-1 rounded"
        gap={2}
      >
        <img
          src={imgUrl}
          className="rounded"
          style={{ minWidth: "125px", height: "75px", objectFit: "cover" }}
        />
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between align-items-center w-100 p-2"
        >
          <Stack direction="vertical" className="d-flex justify-content-center">
            <span className="fw-bold">
              {name}
              <span
                className=" ms-1 text-muted fw-bold"
                style={{ fontSize: "10px" }}
              >
                x{quantity}
              </span>
            </span>
            <span style={{ fontSize: "11px" }} className="fw-bold text-muted">
              {formatCurrency(price)}
            </span>
          </Stack>
          <Stack direction="horizontal">
            <span className="ms-2 text-muted h6">
              {formatCurrency(price * quantity)}
            </span>
            <Button
              variant="outline-secondary ms-auto"
              className="text-dark ms-1"
              onClick={() => removeCartItem(id)}
            >
              x
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CartItem;
