import React, {useEffect, Fragment} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

const Header = props => {
    const { fetchUser, auth } = props;
    useEffect(()=>{
        fetchUser();
    },[])

    const headerContent = ()=>{

        switch (auth){
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return (
                    <Fragment>
                        {auth?<Fragment><li><a>Hello {auth.get('_id').slice(0,4)}</a></li><li><a>Credits: {auth.get('credits')}</a></li></Fragment>:''}
                        
                        <li><Payments/></li>
                        <li><a href="/api/logout">Logout</a></li>
                    </Fragment>);
        }
    }
    return(
        <Fragment>
            <nav>
                <div className = "nav-wrapper">
                    <Link className = "left brand-logo" to={auth ? "/surveys" : "/"}>
                        Emaily
                    </Link>
                    <ul className = "right">                       
                        {headerContent()}
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

const mapState = (state)=>({
    auth: state.getIn(["auth","user"])
});

const mapDispatch = (dispatch)=>({
    fetchUser(){
        dispatch(actionCreators.fetchUser())
    }
});

export default connect(mapState, mapDispatch)(Header);