import "./styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Shop from './Pages/Shop/index';
import Blogpage from './Pages/Blog/index';
import Contact from './Pages/Contact/index';
import Checkout from './Pages/Checkout/index';
import Cart from './Pages/Cart/index';
import Prodetails from './Pages/Productdetails/index';






export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/blog" component={Blogpage} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
        <Route path="/productdetails" component={Prodetails} />
      </Switch>
      <Footer />
    </Router>
  );
}
