import React from 'react'

const CheckoutSteps = (props) => {
    return (
        <div className="row checkout-steps">
           <div className={props.step1 ? 'active' : ''}>Entrar</div>
           <div className={props.step2 ? 'active' : ''}>Envio</div>
           <div className={props.step3 ? 'active' : ''}>Pagamento</div> 
           <div className={props.step4 ? 'active' : ''}>faça a encomenda</div> 
        </div>
    );
}

export default CheckoutSteps
