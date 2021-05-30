import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Card} from 'react-bootstrap';
import Auxy from "../../hoc/Auxy";
import './Carousel.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carosel = (props) => {
  return (
    <Auxy>
        <h2 className="text-center"> Checkout all new episodes!!!</h2>
      <Carousel responsive={responsive}>
        <div><Card style={{ width: "22rem", marginTop:"20px"}}>
        <Card.Body>
          <Card.Title>First Episode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Introduction
          </Card.Subtitle>
          <Card.Text>
            Short introduction about me and what I do.
          </Card.Text>
          {/* <ReactAudioPlayer src="adeseyebanmeke.mp4" autoPlay controls /> */}
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "22rem", marginTop:"20px"}}>
        <Card.Body>
          <Card.Title>First Episode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Introduction
          </Card.Subtitle>
          <Card.Text>
            Short introduction about me and what I do.
          </Card.Text>
          {/* <ReactAudioPlayer src="adeseyebanmeke.mp4" autoPlay controls /> */}
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "22rem", marginTop:"20px"}}>
        <Card.Body>
          <Card.Title>First Episode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Introduction
          </Card.Subtitle>
          <Card.Text>
            Short introduction about me and what I do.
          </Card.Text>
          {/* <ReactAudioPlayer src="adeseyebanmeke.mp4" autoPlay controls /> */}
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "22rem", marginTop:"20px"}}>
        <Card.Body>
          <Card.Title>First Episode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Introduction
          </Card.Subtitle>
          <Card.Text>
            Short introduction about me and what I do.
          </Card.Text>
          {/* <ReactAudioPlayer src="adeseyebanmeke.mp4" autoPlay controls /> */}
        </Card.Body>
      </Card></div>
      </Carousel>
    </Auxy>
  );
};
export default Carosel;
