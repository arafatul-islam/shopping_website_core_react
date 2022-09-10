import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const SingleProduct = ({ product, isCart, submit }) => {
  if (isCart) {
    return (
      <div className="d-flex justify-content-around align-items.center border border-1 py-2 my-1">
        {console.log(isCart)}
        <img src={product.img} alt={`tank${product.title}`} width="50spx" />
        <h5>{product.title}</h5>
        <Button variant="danger" onClick={() => submit(product.id)}>
          delete
        </Button>
      </div>
    );
  }

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.Description}</Card.Text>
        <Button variant="primary" onClick={() => submit(product.id)}>
          ${product.price}
        </Button>
      </Card.Body>
    </Card>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

export default SingleProduct;
