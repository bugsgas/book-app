import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [err, setErr] = useState("");

  useEffect(() => {
    getDetailedData();
  }, []);

  const getDetailedData = () => {
    const api = `https://example-data.draftbit.com/sneakers/${id}`; // Fixed the API URL
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

  const buttonsData = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

  const buttons = buttonsData.map((label, index) => (
    <button key={index} className="button-styled">
      {label}
    </button>
  ));

  const options = [1, 2, 3, 4, 5];

  return (
    <>
      <Row className="d-flex justify-content-between px-3 pt-3">
        <Col lg={4}>
          <Image fluid src={data.media?.imageUrl} /> {/* Updated data access */}
        </Col>
        <Col lg={7}>
          <h4>{data.brand}</h4> {/* Updated data access */}
          <h2>{data.title}</h2> {/* Updated data access */}
          <h2>${data.retailPrice}</h2> {/* Updated data access */}
          <hr />
          <div className="div">
            <h4>Size</h4>
            <div>{buttons}</div>
          </div>
          <hr />
          <h4>How</h4>
          <select className="selectstyled">
            {options.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          <div className="container d-flex justify-content-between align-items-center">
            {" "}
            {/* Updated class to className */}
            <h4 className="add-to-cart">Add to Cart</h4>{" "}
            {/* Updated class to className */}
            <button className="love-button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Details;
