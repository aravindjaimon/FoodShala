import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Row,
} from "reactstrap";
import styles from "./Content.module.css";
import placeholder from "./../../Images/mainlogo.png";

const Content = () => {
  return (
    <Container className={styles.main}>
      <Row className={styles.center}>
        <Card className={styles.card}>
          <CardImg src={placeholder}></CardImg>
          <CardBody>
            <CardTitle>Food Name</CardTitle>
            <CardSubtitle>₹123</CardSubtitle>
            <CardText>Description</CardText>
            <Button color="success">Order Now</Button>
          </CardBody>
        </Card>
        <Card className={styles.card}>
          <CardImg src={placeholder}></CardImg>
          <CardBody>
            <CardTitle>Food Name</CardTitle>
            <CardSubtitle>₹123</CardSubtitle>
            <CardText>Description</CardText>
            <Button color="success">Order Now</Button>
          </CardBody>
        </Card>
        <Card className={styles.card}>
          <CardImg src={placeholder}></CardImg>
          <CardBody>
            <CardTitle>Food Name</CardTitle>
            <CardSubtitle>₹123</CardSubtitle>
            <CardText>Description</CardText>
            <Button color="success">Order Now</Button>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default Content;
