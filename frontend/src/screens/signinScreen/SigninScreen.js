import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const SigninScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandeler = (e) =>{
        e.preventDefalt();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandeler}>
                <div>
                    <h1>Iniacia seção</h1>
                </div>
                <div>
                    <label htmlFor=" Email">Endereço de Email</label>
                    <input
                    type="email" 
                    id="email" 
                    placeholder="Digite um email" 
                    required onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                    type="password" 
                    id="password" 
                    placeholder="Digite uma senha" 
                    required onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Entrar
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Novo Cliente? <Link to="/register"> Criar uma conta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninScreen
