import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardTi,
  CardTitle,
} from "reactstrap";
import ANavBar from "../nav_bar";

const LayOut = (props) => {
  return (
    <>
      <Container fluid="xxl">
        {/* Navbar mounted here */}
        <ANavBar />

        <Row style={{ marginTop: "2px", backgroundColor: "#fff" }}>
          <Col style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div style={{ marginTop: "2rem" }}>
              <CardTitle className="d-flex justify-content-center h2 ">Home</CardTitle>
              <br />
              <div>
                <Form>
                  <FormGroup className="pt-2">
                    <Input className="d-flex justify-content-center"
                      type="text"
                      name="email"
                      id="exampleEmail"
                      placeholder="Search"
                    />
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Col>
          <Col
            xl="10"
            style={{
              height: "calc(100vh - 90px)",
              overflowY: "scroll",
              // padding:"2px",
              width: "80%",
              scrollbarColor: "red",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }}
          >
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LayOut;
