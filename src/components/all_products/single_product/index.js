import React from "react";
import './style.scss'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row
} from "reactstrap";

export const SingleProduct = ({ singleProduct }) => {
  return (
    
      <Col sm="3"  style={{ padding: "0 10px" }}>
        <Card className="all-product-card">
          <CardImg className="all-product-image" src={singleProduct.img} />
          <CardBody style={{ fontWeight: "700" }}>
            <CardTitle style={{ fontSize: "25px" }}>
              {singleProduct.name}
            </CardTitle>
            <CardText style={{ fontSize: "15px", color: "#B12704" }}>
              {singleProduct.discription}
            </CardText>
            <CardSubtitle style={{ fontSize: "15px" }}>
                Total stock :
              {singleProduct.totalStock}
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: "15px" }}>
                Price :
              {singleProduct.price}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
  );
};



