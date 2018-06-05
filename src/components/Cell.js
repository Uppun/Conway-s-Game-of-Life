import React, {Component} from 'react';
import '../main.css';
import LifeActions from '../actions/LifeActions';


export default class LifeCell extends Component {
    
    handleClick = () => {
        LifeActions.toggle(this.props.rowIndex, this.props.columnIndex);
    }

    render() {
        return(
            <div className={this.props.status ? 'cell live' : 'cell dead'} onClick={this.handleClick}/>
        )
    }
}