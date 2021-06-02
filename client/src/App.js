import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SignInForm from "./pages/SignInForm";
function App() {
return(

<BrowserRouter>
<Switch>
    <Route path="/" exact component ={Home}></Route>
    <Route path="/Form" exact component={SignInForm}></Route>
    <Route component={PageNotFound}></Route>
</Switch>
</BrowserRouter>
);
}

export default App ;