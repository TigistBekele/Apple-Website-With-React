import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/Footer";

// Pages
import Iphone from "./Components/Pages/Iphone/Iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Watch from "./Components/Pages/Watch/Watch";
import Tv from "./Components/Pages/Tv/Tv";
import Music from "./Components/Pages/Music/Music";
import Support from "./Components/Pages/Support/Support";
import Four04 from "./Components/Pages/Four04/Four04";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Iphone" exact component={Iphone} />
          <Route path="/Ipad" exact component={Ipad} />
          <Route path="/Watch" exact component={Watch} />
          <Route path="/Tv" exact component={Tv} />
          <Route path="/Music" exact component={Music} />
          <Route path="/Support" exact component={Support} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
