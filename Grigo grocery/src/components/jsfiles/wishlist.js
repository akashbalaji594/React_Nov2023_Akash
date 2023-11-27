import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
const WishlistPage = () => {
  return (
    <section className="wishlist-page">
      <div className="container py-5">
        <h2 className="mb-4">Wishlist</h2>
        <div className="row">
        <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://bettyfresh.com/268-large_default/tata-salt.jpg"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Tata Salt</Card.Title>
                  <Card.Text>1kg of crystal salt</Card.Text>
                  <Card.Text>Price: $20</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://www.mahalaxmimedicos.com/assets/upload/products/MM62651504336835.jpg"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Bourn Vita{}</Card.Title>
                  <Card.Text>500g of packet: {}</Card.Text>
                  <Card.Text>Price: $15{}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://hybrisprod.azureedge.net/sys-master-prod/h7f/h3d/8957776396318/700202_main.jpg_1700Wx1700H"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Yardley{}</Card.Title>
                  <Card.Text>200g of powder {}</Card.Text>
                  <Card.Text>Price: $5{}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://i.pinimg.com/736x/20/4c/b6/204cb6f022c202373fb215b21a371d5e.jpg"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Lays{}</Card.Title>
                  <Card.Text>Red chilli Flavour {}</Card.Text>
                  <Card.Text>Price: $3{}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://www.quicklly.com/upload_images/product/1622578155-aachi-meat-masala.jpg"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Aachi{}</Card.Title>
                  <Card.Text>Meat Masala {}</Card.Text>
                  <Card.Text>Price: $10{}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://cdn.shopclues.com/images/thumbnails/40627/320/320/FoggDynamicampMagneticBodySpray120mleachpackof2zpsn48yopz71467778091.jpg"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>Fogg{}</Card.Title>
                  <Card.Text>Jasmine fragerence {}</Card.Text>
                  <Card.Text>Price: $8{}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 col-lg-3 col-sm-6">
            <div className="card">
              <img
                src="https://i.ebayimg.com/images/g/TM0AAOSwOStdgyEr/s-l640.png"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
              <Card.Body>
                  <Card.Title>All clear{}</Card.Title>
                  <Card.Text>100g of Shampoo {}</Card.Text>
                  <Card.Text>Price: 0.5${}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="danger"
                    size="sm"
                  >
                    <FaTrash /> Remove
                  </Button>
                  </Card.Footer>
        
              </div>
            </div>
          </div>
          {/* Add more items */}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
