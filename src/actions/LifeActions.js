import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    toggle(row, column) {
        Dispatcher.dispatch({
            type: ActionTypes.TOGGLE,
            row,
            column,
        });
    },

    tick() {
        Dispatcher.dispatch({
            type: ActionTypes.TICK,
        });
    }
}