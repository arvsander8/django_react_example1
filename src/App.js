import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import store from "./store";
import { Provider} from "react-redux";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Proyect from "./containers/pages/Proyect";
import Legal from "./containers/pages/Legal";
import Blog from "./containers/pages/Blog";
import HooksUseState from "./containers/pages/Hooks/HooksUseState";
import HooksUseEffect from "./containers/pages/Hooks/HooksUseEffect";
import HooksUseContext from "./containers/pages/Hooks/HooksUseContext";
import HooksUseReducer from "./containers/pages/Hooks/HooksUseReducer";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* Error Display */}
                    <Route path="*" element={<Error404/>}/>

                    {/* Home Display */}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/proyect" element={<Proyect/>}/>
                    <Route path="/legal" element={<Legal/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/hooksUseState" element={<HooksUseState/>}/>
                    <Route path="/hooksUseEffect" element={<HooksUseEffect/>}/>
                    <Route path="/hooksUseContext" element={<HooksUseContext/>}/>
                    <Route path="/hooksUseReducer" element={<HooksUseReducer/>}/>
                </Routes>
            </Router>
        </Provider>
    )
        ;
}

export default App;
