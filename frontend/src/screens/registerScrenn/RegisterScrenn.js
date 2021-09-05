import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import { register} from '../../actions/userActions';
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';


const RegisterScreen = (props) => {

    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert('senha não é ingual')
      }else{
          dispatch(register(name, email, password));
      }
    };

    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
      }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Criar uma conta</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor=" name">name</label>
                    <input
                    type="text" 
                    id="name" 
                    placeholder="Digite o seu nome" 
                    required onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor=" Email">Email</label>
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
                    <label htmlFor="confirmpassword">Confirma Senha</label>
                    <input
                    type="password" 
                    id="confirmpassword" 
                    placeholder="confirmar senha" 
                    required onChange={(e) => setConfirmPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Cadastrar
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        já tenho uma conta? {''}<Link to={`/signin?redirect=${redirect}`}> Entar</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen;
