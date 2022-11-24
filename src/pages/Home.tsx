import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Home = () => {
  return (
    <>
      <h1 className="mb-4 mb-md-3">Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3 g-sm-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
