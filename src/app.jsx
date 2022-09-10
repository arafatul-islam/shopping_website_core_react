import React from "react";
import { Container, Row, Col, Modal, ModalHeader } from "react-bootstrap";

// components
import CartSidebar from "./components/cart-sidebar";
import ProductSidebar from "./components/product-sidebar";
import Searchbar from "./components/searchbar";

// fake data
import PRODUCTS from "./data/fatke-data";

class App extends React.Component {
  state = {
    products: [],
    selectedProducts: [],
    searchTerm: "",
    showProducts: [],
    errors: {},
    // isModalOpen: false,
  };

  // life-cycle
  componentDidMount() {
    this.setState({
      products: PRODUCTS,
      showProducts: PRODUCTS
    });
  }

  // crud
  addProduct = (productId) => {
    const isFound = this.state.selectedProducts.find((p) =>
      p.id === productId ? true : false
    );
    console.log(isFound);

    if (this.state.selectedProducts.length < 4 && !isFound) {
      const products = [...this.state.products];
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      //   console.log(selectedProduct);
      this.setState({
        selectedProducts: [...this.state.selectedProducts, selectedProduct],
      });
    } else {
      //   const errors = {};
      //   this.state.selectedProducts.length >= 4
      //     ? (errors.productLength = "cannot select more than 4 products")
      //     : (errors.productLength = "");
      //   isFound !== undefined
      //     ? (errors.dublicate = "same product cannot select again")
      //     : (errors.dublicate = "");

      //   this.setState({
      //     errors,
      //   });

      //   Object.keys(errors).length
      //     ? this.setState({ isModalOpen: true })
      //     : this.setState({ isModalOpen: false });
      alert("an error occured!");
    }
  };

  deleteProduct = (productId) => {
    const products = [...this.state.selectedProducts];
    const selectedProducts = products.filter(
      (product) => product.id !== productId
    );
    this.setState({ selectedProducts });
  };

  deleteAllProducts = () => {
    this.setState({
      selectedProducts: [],
    });
  };

  chooseOneRandomProduct = () => {
    const products = [...this.state.selectedProducts];
    const choosenProduct = products[Math.floor(Math.random() * 4)];
    // console.log(choosenProduct.id);
    const selectedProducts = products.filter(
      (product) => product.id === choosenProduct.id
    );
    console.log(selectedProducts);
    this.setState({ selectedProducts });
  };

  //   searchbar
  handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  performSearch = (searchTerm) => {
    const products = [...this.state.products];
    const showProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(this.state.showProducts);
    this.setState({showProducts});
    console.log(this.state.showProducts);

  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    //
    return (
      <Container className="border border-1">
        <h1 className="text-center text-uppercase">counfused customer</h1>
        <Row>
          <Col>
            <Searchbar performSearch={this.performSearch} />
          </Col>
        </Row>
        <Row className="display-content my-3">
          <Col md={8}>
            <ProductSidebar
              showProducts={this.state.showProducts}
              addProduct={this.addProduct}
            />
          </Col>
          <Col md={4}>
            <CartSidebar
              selectedProducts={this.state.selectedProducts}
              deleteProduct={this.deleteProduct}
              reset={this.deleteAllProducts}
              random={this.chooseOneRandomProduct}
            />
          </Col>
        </Row>
        <Row className="ques-ans">
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
