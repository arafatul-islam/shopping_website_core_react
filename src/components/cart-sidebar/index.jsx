import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleProduct from "../product-sidebar/single-product";

const CartSidebar = ({ selectedProducts, deleteProduct ,reset,random}) => {
  return (
    <Container>
      <h2>Selected Tanks</h2>
      {selectedProducts.map((product) => (
        <Row key={product.id}>
          <Col>
            <SingleProduct
              product={product}
              submit={deleteProduct}
              isCart={true}
              reset={reset}
            />
          </Col>
        </Row>
        
      ))}

      <Row>
        <Col>
        <Button onClick={reset} variant="danger" > Reset </Button>
        </Col>
        <Col>
        <Button onClick={random} variant="success" > Random </Button>
        </Col>
      </Row>
    </Container>
  );
};
CartSidebar.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired
};

export default CartSidebar;
