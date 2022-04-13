import react from "react";
import { BrowserRouter, Routes as Routers,Route} from "react-router-dom";

import Login from './pages/Login';
import Book from './pages/Book';


export default function Routes() {
    return (
            <BrowserRouter>
                <Routers>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/book" element={<Book/>}/>
                </Routers>
            </BrowserRouter>
    );
}