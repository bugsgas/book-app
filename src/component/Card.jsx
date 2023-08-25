import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ imageUrl, title, description }) => {
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
    <div className="cardlist">
      {bookList.map((item) => (
        <div className="card">
          <img src={item.image_url} alt="Card Image" />
          <div className="card-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
