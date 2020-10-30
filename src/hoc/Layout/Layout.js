import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: (prevState.showSideDrawer ? false : true) };
        });
    }


    render() {
        return (
            <Aux>
                <Toolbar
                    clicked={this.sideDrawerHandler}
                />
                <SideDrawer
                    closed={this.sideDrawerHandler}
                    open={this.state.showSideDrawer}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;