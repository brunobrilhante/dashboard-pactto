import React, { useState, useEffect } from 'react';
import './styles.css'

const PersonalInfo = () => {
    // Estado para armazenar o país selecionado e a lista de países
    const [paisSelecionado, setPaisSelecionado] = useState('');
    const [paises, setPaises] = useState([]);

    // Buscar a lista de países quando o componente for montado
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                // Mapeia os países para um formato mais simples
                const listaPaises = data.map((pais) => pais.name.common);
                // Ordena a lista de países em ordem alfabética
                listaPaises.sort();
                setPaises(listaPaises);
            })
            .catch((error) => console.error('Erro ao buscar países:', error));
    }, []);

    // Função para lidar com a mudança no select
    const handleSelectChange = (event) => {
        setPaisSelecionado(event.target.value);
    };
    return (
        <>
            <form className='form'>
                <div className='buttons'>
                    <button className='buttonReset' type="submit">Reset Changes</button>
                    <button type="submit">Save Changes</button>
                </div>
                <div className='field'>
                    <input
                        className='text'
                        type="text"
                        id="nome"
                    />
                    <input
                        className='text'
                        type="text"
                        id="sobrenome"
                    />
                    <input
                        className='text'
                        type="email"
                        id="email"
                    />
                    <div>
                        <select className='text' value={paisSelecionado} onChange={handleSelectChange}>
                            <option value="" disabled>Country</option>
                            {paises.map((pais) => (
                                <option key={pais} value={pais}>{pais}</option>
                            ))}
                        </select>
                    </div>

                    <div className='list'>
                        <h4>What is your main activity? Or activities</h4>
                        <label>
                            <input type="checkbox" />
                            <span>Video</span>
                        </label> <br />
                        <label>
                            <input type="checkbox" />
                            <span>Design</span>
                        </label> <br />
                        <label>
                            <input type="checkbox" />
                            <span>Development</span>
                        </label> <br />
                        <label>
                            <input type="checkbox" />
                            <span>Sports</span>
                        </label> <br />
                        <label>
                            <input type="checkbox" />
                            <span>Medical</span>
                        </label> <br />
                        <label>
                            <input type="checkbox" />
                            <span>Inspections</span>
                        </label>
                        <input
                            className='text'
                            type="text"
                            id="sobrenome"
                            placeholder='Other'
                        />
                    </div>

                    <div className='user'>
                        <h4>User handle and password</h4>
                        <input
                            className='text'
                            type="text"
                            id="user"
                        />
                        <input
                            className='text'
                            type="password"
                            id="senha"
                            placeholder='Password'
                        />
                        <input
                            className='text'
                            type="password"
                            id="senha"
                            placeholder='Confirm password'
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default PersonalInfo;