import { Row, Col } from "react-bootstrap";
import storeItems from "../data/items.json";

const Home = () => {
  return (
    <>
      <h1 className="mb-3">Store</h1>
      <Row sm={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
