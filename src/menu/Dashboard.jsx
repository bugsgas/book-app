//important import
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";

//bootstrap
import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  const [bookList, setbookList] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    getDetailedData();
  }, []);
  const getDetailedData = () => {
    const api = `https://example-data.draftbit.com/books?_limit=8`;
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setbookList(res.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
    errorState();
  };

  const errorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };
  return (
    <Container>
      <Col md={{ span: 10, offset: 1 }}>
        <Row style={{ paddingBottom: "40px" }}>
          <h1>Popular Now</h1>
        </Row>
        <Row className="">
          {bookList.map((item) => (
            <Col xs={6} md={3} className="pt-lg-0 pt-sm-4">
              <Card className="card" style={{ maxWidth: "306px" }}>
                <div className="img-wrap"></div>

                <Card.Body className="text-wrap">
                  <Card.Title className="text-title">{item.title}</Card.Title>
                  <Card.Text>{item.authors}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Container>
  );
}

export default Dashboard;
