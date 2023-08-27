//important import

import axios from "axios";
import { useEffect, useState } from "react";

//MUI
import * as React from "react";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

//bootstrap
import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    getDetailedData();
  }, []);
  const getDetailedData = () => {
    const api = `https://example-data.draftbit.com/sneakers?_limit=200`;
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData(res.data);
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
    <>
      <Row className="">
        {data.map((item) => (
          <Col xs={6} md={3} className="pt-lg-0 pt-sm-4">
            <Card
              className="card"
              style={{
                width: "160",
                height: "280px",
                marginBottom: "40px",
                marginRight: "20px",
                backgroundColor: "white",
                borderColor: "white",
              }}
            >
              <div className="img-wrap">
                <CardMedia
                  component="img"
                  height="180"
                  image={item.media.imageUrl}
                />
              </div>

              <Card.Body className="text-wrap">
                <Card.Title
                  style={{
                    color: "#060312",
                  }}
                  className="text-title"
                >
                  {item.title}
                </Card.Title>
                <Card.Text>{item.authors}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Dashboard;

// {
//   bookList.map((item) => (
//     <Col xs={6} md={3} className="pt-lg-0 pt-sm-4">
//       <Card className="card" style={{ maxWidth: "306px" }}>
//         <div className="img-wrap"></div>

//         <Card.Body className="text-wrap">
//           <Card.Title className="text-title">{item.title}</Card.Title>
//           <Card.Text>{item.authors}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ));
// }
