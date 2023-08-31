import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Nike() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [err, setErr] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [filtersVisible, setFiltersVisible] = useState(true);

  useEffect(() => {
    getDetailedData();
  }, []);

  const getDetailedData = () => {
    const api = `https://example-data.draftbit.com/sneakers?_limit=200`;
    axios
      .get(api)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
    errorState();
  };
  const navigate = useNavigate();
  const goToId = (id) => navigate(`/details/${id}`);

  useEffect(() => {
    // If a brand is selected, filter the data based on the selected brand
    if (selectedBrand) {
      const filtered = data.filter((item) => item.brand === selectedBrand);
      setFilteredData(filtered);
      setFiltersVisible(false); // Hide the filter buttons
    } else {
      // If no brand is selected, show all data
      setFilteredData([]);
      setFiltersVisible(true); // Show the filter buttons
    }
  }, [data, selectedBrand]);

  const errorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };

  return (
    <>
      <div>
        {filtersVisible && ( // Render filter buttons if filtersVisible is true
          <>
            {/* Brand Filter Buttons */}
            <Button
              variant="primary"
              onClick={() => setSelectedBrand("Nike")}
              className="mr-2"
            >
              Nike
            </Button>
            <Button
              variant="primary"
              onClick={() => setSelectedBrand("adidas")}
              className="mr-2"
            >
              Adidas
            </Button>
            <Button
              variant="primary"
              onClick={() => setSelectedBrand("Vans")}
              className="mr-2"
            >
              Vans
            </Button>
            {/* Add more brand buttons as needed */}
          </>
        )}
        <Button variant="secondary" onClick={() => setSelectedBrand(null)}>
          Clear Filter
        </Button>
      </div>
      {filteredData.length > 0 && (
        <Row className="">
          {filteredData.map((item) => (
            <Col xs={6} md={3} className="pt-lg-0 pt-sm-4" key={item.id}>
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
                  <Card.Img
                    onClick={() => goToId(item.id)}
                    variant="top"
                    src={item.media.imageUrl}
                    style={{ height: "180px" }}
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
                  {/* You can add more details here */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Nike;
