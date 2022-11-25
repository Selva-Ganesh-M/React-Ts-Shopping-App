import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, ListGroup, Button, Card } from "react-bootstrap";
import { useCartContext } from "../context/ShoppingCartContext";
import { DetailedCartItem } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

const Sidebar = () => {
  const { shouldShow, handleHide, getItemsForCartOffCanvas, cartItems } =
    useCartContext();
  let items: DetailedCartItem[] = getItemsForCartOffCanvas();
  useEffect(() => {
    items = getItemsForCartOffCanvas();
    const Total = getTotal(items);
  }, [cartItems]);
  const getTotal = (items: DetailedCartItem[]): number => {
    let total: number = 0;
    items.forEach((item) => (total += item.price * item.quantity));
    return total;
  };
  return (
    <>
      <Offcanvas show={shouldShow} placement="end" onHide={handleHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.length !== 0 ? (
            items.map((item) => (
              <>
                <CartItem key={item.id} item={item} />
              </>
            ))
          ) : (
            <>
              <div className="lead">Your cart is empty.</div>
              <Link to="/">
                <Button variant="primary" onClick={handleHide}>
                  Shop Now!
                </Button>
              </Link>
            </>
          )}
          <h3 className="text-end me-1 fs-6 my-3 text-muted">
            Total: {formatCurrency(getTotal(items))}
          </h3>
          <Button className="btn-lg w-100">Place Order!</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
