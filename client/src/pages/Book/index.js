import react from "react";
import { Link } from "react-router-dom";
import {FiPower} from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.svg';

export default function Book() {
    return (
        <div className="book-container">
            <header>
                <img src="{logoImage}" alt="Erudio" />
                <span>Bem vindo, <strong>João</strong>!</span>
                <link className="button" to="book/new">Adicionar novo Livro</link>
                <button type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>
        </div>
        );
}