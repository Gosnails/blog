import React from 'react';
import HeaderComponent from '@/components/header/header.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(event.target.value)
    }
    render() {
        return (
            <HeaderComponent
                onChange={this.handleChange}
                value={this.state.value}
            />
        )
    }
}

export default Header;