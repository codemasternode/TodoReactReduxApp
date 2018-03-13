import { add_todo } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case add_todo:
            console.log(state)
            return [action.payload, ...state]
        default:
            return state
    }
}