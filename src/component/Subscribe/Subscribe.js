import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";
import Auxy from "../../hoc/Auxy";
import "./Subscribe.css";
const Subscribe = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Subscribed!");
  };
  return (
    <Auxy className="subscribe">
      <Jumbotron className="subscribe">
        <h4>Love our Podcast? Kindly Subscribe to our weekly episodes</h4>

        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="First Name"
            className=" mr-sm-2"
          />
          <FormControl
            type="text"
            placeholder="Last Name"
            className=" mr-sm-2"
          />
          <FormControl
            type="email"
            placeholder="Enter email"
            className=" mr-sm-2"
          />
          <Button className="btn1" type="submit">
            Subscribe
          </Button>
        </Form>
      </Jumbotron>
    </Auxy>
  );
};
export default Subscribe;
