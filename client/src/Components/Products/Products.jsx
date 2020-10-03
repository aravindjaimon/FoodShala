import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import styles from "./Products.module.css";

const Products = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className={styles.main}>
      <Row className={styles.header}>
        <Col>
          <h4>All Products</h4>
        </Col>
        <Col className={styles.right}>
          <Button color="success" onClick={toggle}>
            Add New Product
          </Button>
          <Modal className={`modal-lg`} isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add a New Product</ModalHeader>
            <Form>
              <ModalBody>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Product Name</Label>
                      <Input></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Product Price</Label>
                      <Input></Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Product Description</Label>
                      <Input></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Image Link</Label>
                      <Input></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Category</Label>
                      <Input type="select">
                        <option value="">Select One Category</option>
                        <option value="non-veg">Non Vegitarian</option>
                        <option value="veg">Vegitarian</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Add Product
                </Button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </Col>
      </Row>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Biriyani</td>
            <td>₹50</td>
            <td>Super</td>
            <td>link</td>
            <td>Non Veg</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
