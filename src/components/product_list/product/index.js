import React from "react";
import './style.scss'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";



export const Product = ({ product }) => {
  return (
    <Col sm="3"  style={{ padding: "0 10px" }}>
      <Card onClick={() => console.log('CLICK')} className="product-card" >
        <CardImg className="product-image"
       src={product.img} />
        <CardBody style={{ fontWeight: "700" }}>
          <CardTitle style={{ fontSize: "25px" }}>{product.name}</CardTitle>
          <CardText style={{ fontSize: "15px", color: "#B12704" }}>

            {product.stock}
          </CardText>
          <CardSubtitle style={{ fontSize: "15px" }}>
            {product.discription}
          </CardSubtitle>
       </CardBody>
      </Card>
    </Col>
  );
};
