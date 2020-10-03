import React from "react";
import { Col, Container, Input, Row, Table } from "reactstrap";

const Orders = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h4>All Orders</h4>
        </Col>
      </Row>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Biriyani</td>
            <td>₹50</td>
            <td>Some place</td>
            <td>98798798</td>
            <td>
              <Input type="checkbox"></Input>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
