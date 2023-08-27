//important import
import axios from "axios";
import { useEffect, useState } from "react";

import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Details() {
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
          <Image fluid src={data[0]?.media.imageUrl} />
        </Col>
        <Col lg={7}>
          <h4>{data[0]?.brand}</h4>
          <h2>{data[0]?.title}</h2>
          <h2>${data[0]?.retailPrice}</h2>
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
          <div class="container d-flex justify-content-between align-items-center">
            <h4 class="add-to-cart">Add to Cart</h4>
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
