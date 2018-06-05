import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';

const SIZE = 10;

class LifeStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getStatus(array, row, column) {
        if(row < 0 || row >= array.length || column < 0 || column >= array[row].length) {
            return 0; 
        }
        return array[row][column];
    }
    getInitialState() {
        let GridArray = [];
        for(let i = 0; i < SIZE; i++) {
            GridArray[i] = [];
            for(let j = 0; j < SIZE; j++) {
                GridArray[i][j] = 0;
            }
        }
        return {GridArray};
    }

    reduce(state, action) {
        switch(action.type) {
            case ActionTypes.TOGGLE: {
                let GridArray = [...state.GridArray];
                let Row = [...GridArray[action.row]];

                Row[action.column] = !Row[action.column];
                GridArray[action.row] = Row;
                return {GridArray};
            }

            case ActionTypes.TICK: {
                let GridArray = [];

                for(let i = 0; i < SIZE; i++) {
                    GridArray[i] = []
                    for(let j = 0; j < SIZE; j++) {
                        let total = 0;
                        for(let k = i-1; k <= i+1; k++) {
                            for(let l = j-1; l <= j+1; l++) {
                                if(this.getStatus(state.GridArray, k, l) && !(k === i && j === l)) {
                                    total++;
                                }
                            }
                        }
                        if(total === 3) {
                            GridArray[i][j] = 1;
                        }
                        else if(total === 2) {
                            GridArray[i][j] = state.GridArray[i][j];
                        }
                        else {
                            GridArray[i][j] = 0;
                        }
                    
                    }
                }
                return {GridArray};
            }

            default: 
                return state;
        }
    }
}

export default new LifeStore();