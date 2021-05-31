import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Component/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">

<BrowserRouter>
<Switch>
  <Route exact path="/" component={Home} />
</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
