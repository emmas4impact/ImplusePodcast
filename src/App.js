import "./App.css";
import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ModalCookies from  './component/Cookies/ModalCookies'
import Feature from "./component/Features/Feature";
import Episode from "./component/Episodes/Episode";
import Auxy from "./hoc/Auxy";

function App() {
  return (
    <Auxy>
      <Router>
        <Header />
        <Route exact path="/features" component={Feature} />
        <Route path="/episodes" component={Episode} />
        <ModalCookies />
      </Router>
      
    </Auxy>
  );
}

export default App;
