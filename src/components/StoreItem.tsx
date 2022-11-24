import React from "react";
import { Button } from "react-bootstrap";
import { TypeH1 } from "react-bootstrap-icons";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 0;
  return (
    <>
      <div className="card">
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
                <Button>+</Button>
                <span>
                  <span className="fs-2 me-2">1</span>
                  in cart
                </span>
                <Button>-</Button>
              </div>
              <div>
                <Button variant="danger">Remove</Button>
              </div>
            </div>
          ) : (
            <Button className="w-100">Add to cart</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreItem;
