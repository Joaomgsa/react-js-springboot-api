import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.svg';


export default function NewBook() {

    const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [launchdate, setLauchDate] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    async function createNewBook(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launchdate,
            price,
        }

        const header = {
            Authorization: `Bearer ${accessToken}`
        }

        try {
            await api.post('api/book/v1', data, {
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            });
            navigate('\books');

        } catch (error) {
            alert('Erro na inclusão do livro! Tente novamente')
        }
    }


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
                <form onSubmit={createNewBook}>
                    <input 
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input 
                        placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input 
                        type="date"
                        value={launchdate}
                        onChange={e => setLauchDate(e.target.value)}
                    />
                    <input 
                        placeholder="Price"
                        value={price}
                        onChange={ e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                </form>     
            </div>
        </div>

    );
}