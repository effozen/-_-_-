import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../home/Home";
import Plan from "../plan/Plan";

const ContentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='' element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='aboutus' element={<Home/>} />
          <Route path='record' element={<Home/>} />
        </Route>
        <Route path='plan'>
          <Route path='' element={<Plan />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ContentRouter;