import { Col } from "react-bootstrap";

const featureBox = {
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 10,
  paddingRight: 10
};

const LessonBox = () => {
  return (
    <Col lg={4} className={utils.mt20}>
      <div style={featureBox}>
        <FaFlickr />
      </div>
    </Col>
  );
};
