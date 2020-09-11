import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { actionCreators } from '../Header/store';

const Payments = (props) => {
    const { handleToken } = props;
    return (
        <StripeCheckout
            name = "Emaily"
            description = "$5 for 5 email credits"
            amount= { 500 } // unit is cent, so 5 dollars is 500 cents 
            token = { token => handleToken(token) } //a token that get back from stripe
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            
        >
            <button className = "btn">
                Add credits
            </button>
        </StripeCheckout>
    )
};

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
    handleToken(token){
        dispatch(actionCreators.handleToken(token));
    }
});

export default connect(mapState, mapDispatch)(Payments);