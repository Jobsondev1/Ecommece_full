import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../components/checkout/CheckoutSteps'

const ShippingAddressScreen = (props) => {
    const userSignin =useSelector((state) => state.userSignin);
    const { userInfo} = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if(!userInfo){                          // seo usuario não estivar longado ir para Login
        props.history.push('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [states, setStates] = useState(shippingAddress.states)
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, postalCode, address, city, states,  country})
        );
        props.history.push('/payment');
    }
    return (
        <div>
           <CheckoutSteps step1 step2></CheckoutSteps>
           <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Endereço para envio</h1>
            </div>

            <div>
                <label htmlFor="fullName">Nome completo*</label>
                <input 
                    type="text"
                    id="fullNema"
                    placeholder="Nome completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required >
                </input>
            </div>   

            <div>
                <label htmlFor="postalCode">CEP*</label>
                <input 
                    type="text"
                    id="postalCode"
                    placeholder="CEP"
                    value={postalCode}
                    onChange={(e) =>setPostalCode(e.target.value)}
                    required >
                </input>
            </div>   
            <div>
                <label htmlFor="address">Endreço*</label>
                <input 
                    type="text"
                    id="address"
                    placeholder="Endereço"
                    value={address}
                    onChange={(e) =>setAddress(e.target.value)}
                    required >
                </input>
            </div>     

           <div>
                <label htmlFor="city">Cidade*</label>
                <input 
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    value={city}
                    onChange={(e) =>setCity(e.target.value)}
                    required >
                </input>
            </div>    
            
            <div>
                <label htmlFor="states">Estado*</label>
                <input 
                    type="text"
                    id="states"
                    placeholder="Estado"
                    value={states}
                    onChange={(e) =>setStates(e.target.value)}
                    required >
                </input>
            </div>    

            <div>
                <label htmlFor="country">Pais*</label>
                <input 
                    type="text"
                    id="country"
                    placeholder="Pais"
                    value={country}
                    onChange={(e) =>setCountry(e.target.value)}
                    required >
                </input>
            </div>  

            <div>
                <label />
                <button className="primary" type="submit">
                    Continuar
                </button>
            </div>       
           </form>
        </div>
    )
}

export default ShippingAddressScreen;