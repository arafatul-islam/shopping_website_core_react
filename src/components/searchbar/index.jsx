import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Form } from "react-bootstrap";


class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      }
    );
  };

  render() {
    return (
      <Container>
        <Form className="d-flex my-2">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="danger"
            onClick={() => this.props.performSearch(this.state.searchTerm)}
          >
            Search 
          </Button>
        </Form>
      </Container>
    );
  }
}

Searchbar.propTypes = {
    performSearch: PropTypes.func.isRequired,
}
export default Searchbar;
