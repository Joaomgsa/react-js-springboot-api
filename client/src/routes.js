import React from "react";
import { BrowserRouter, Routes as Routers,Route} from "react-router-dom";

import Login from './pages/Login';
import Books from './pages/Books';
import NewBook from './pages/NewBook';


export default function Routes() {
    return (
            <BrowserRouter>
                <Routers>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/books" element={<Books/>}/>
                    <Route exact path="/books/new" element={<NewBook/>}/>
                </Routers>
            </BrowserRouter>
    );
}