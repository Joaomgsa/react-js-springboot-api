import React from "react";
import { Link } from "react-router-dom";
import {FiPower, FiEdit, FiTrash2} from 'react-icons/fi';

import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function Books() {
    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Erudio" />
                <span>Bem vindo, <strong>João</strong>!</span>
                <Link className="button" to="./new">Adicionar novo Livro</Link>
                <button type="button">
                    <FiPower size={18} color="#251fc5"/>
                </button>
            </header>
            
            <h1>Livros Registrados</h1>
            <ul>
                <li>
                    <strong>Titulo:</strong>
                    <p>Docker deep dive</p>
                    <strong>Autor:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Preço:</strong>
                    <p>R$ 47,90</p>
                    <strong>Data de Lancamento:</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20}  color="#251fc5"/>
                    </button>
                    
                    <button type="button">
                        <FiTrash2 size={20}  color="#251fc5"/>
                    </button>

                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Docker deep dive</p>
                    <strong>Autor:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Preço:</strong>
                    <p>R$ 47,90</p>
                    <strong>Data de Lancamento:</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20}  color="#251fc5"/>
                    </button>
                    
                    <button type="button">
                        <FiTrash2 size={20}  color="#251fc5"/>
                    </button>

                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Docker deep dive</p>
                    <strong>Autor:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Preço:</strong>
                    <p>R$ 47,90</p>
                    <strong>Data de Lancamento:</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20}  color="#251fc5"/>
                    </button>
                    
                    <button type="button">
                        <FiTrash2 size={20}  color="#251fc5"/>
                    </button>

                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Docker deep dive</p>
                    <strong>Autor:</strong>
                    <p>Nigel Poulton</p>
                    <strong>Preço:</strong>
                    <p>R$ 47,90</p>
                    <strong>Data de Lancamento:</strong>
                    <p>12/07/2017</p>

                    <button type="button">
                        <FiEdit size={20}  color="#251fc5"/>
                    </button>
                    
                    <button type="button">
                        <FiTrash2 size={20}  color="#251fc5"/>
                    </button>

                </li>
            </ul>
            
        </div>
        );
}