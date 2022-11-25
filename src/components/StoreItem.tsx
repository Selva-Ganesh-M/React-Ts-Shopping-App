import { Button } from "react-bootstrap";
import { useCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const cart = useCartContext();
  const {
    getCartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartItem,
  } = cart;
  const quantity = getCartItems(id);
  return (
    <>
      <div className="card bg-white border-0 shadow-sm">
        <div className="card-body">
          <img
            className="card-img"
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover" }}
          />
          <div className="card-title px-1 my-2 d-flex justify-content-between align-items-center">
            <span className="fs-4">{name}</span>
            <span className="ms-2 fs-5 font-muted">
              {formatCurrency(price)}
            </span>
          </div>
          {quantity !== 0 ? (
            <div
              className="d-flex flex-column justify-content-between align-items-center"
              style={{ gap: "0.5em" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "10px" }}
              >
                <Button onClick={(e) => increaseCartQuantity(id)}>+</Button>
                <span>
                  <span className="fs-2 me-2">{quantity}</span>
                  in cart
                </span>
                <Button onClick={(e) => decreaseCartQuantity(id)}>-</Button>
              </div>
              <div>
                <Button onClick={(e) => removeCartItem(id)} variant="danger">
                  Remove
                </Button>
              </div>
            </div>
          ) : (
            <Button onClick={(e) => increaseCartQuantity(id)} className="w-100">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreItem;
