import React from "react";
import { Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';


export default function NewBook() {

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1> Adicionar novo Livro</h1>
                    <p> Adicione as informações do livro e clique em "Adicionar"</p>
                    <Link className="back-link" to="/books">
                     <FiArrowLeft size={16} color="#251fc5"/>
                     Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Title"/>
                    <input placeholder="Author"/>
                    <input type="date"/>
                    <input placeholder="Price"/>
                    <button className="button" type="submit">Adicionar</button>
                </form>     
            </div>
        </div>

    );
}