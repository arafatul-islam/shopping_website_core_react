import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import SingleProduct from "./single-product";

const ProductSidebar = ({ showProducts, addProduct }) => {
  return (
    <Container>
      <Row>
        {showProducts.map((product) => (
          <Col
            md={4}
            key={product.id}
            className="g-1 d-flex align-items-strech"
          >
            <SingleProduct product={product} submit={addProduct} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
ProductSidebar.propTypes = {
  showProducts: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default ProductSidebar;
