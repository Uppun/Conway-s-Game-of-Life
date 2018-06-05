import React, {Component} from 'react';
import LifeStore from '../stores/LifeStore';
import {Container} from 'flux/utils';
import Cell from './Cell';
import '../main.css';

class LifeGrid extends Component {

    static getStores() {
        return [LifeStore];
    }

    static calculateState(prevState) {
        return LifeStore.getState();
    }


    render() {
        return(
            <div className='Grid'>
                {this.state.GridArray.map((row, rowIndex) => 
                        <div className='gridRow' key={rowIndex}>
                        {row.map((value, columnIndex) => 
                            <Cell status={value} key={columnIndex} rowIndex={rowIndex} columnIndex={columnIndex} />
                        )}
                        </div>
                    )}
            </div>
        )
    }
}

export default Container.create(LifeGrid);
