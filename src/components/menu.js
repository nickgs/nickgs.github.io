import React, { Component } from 'react';
import { MenuStylesWrap } from "../styles/menu-styles";
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'

class NgsMenu extends Component {
    render() {
        return (
            <MenuStylesWrap>
                <Menu>
                    <Link to='/'>About</Link>
                    <Link to='/talks'>Speaking / Teaching</Link>
                    <Link to='/work'>Work</Link>
                    <Link to='/contact'>Contact</Link>
                </Menu>
             </MenuStylesWrap>
        );
    }
}

export default NgsMenu;