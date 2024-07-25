import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nine from "./Nine";
import Two from "./Two"

function app(){
return(
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Nine/>}/>
        <Route path = "/products" element = {<Two/>}/>
    </Routes>
    </BrowserRouter>
);
}
export default app;