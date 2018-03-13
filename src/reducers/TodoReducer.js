import { add_todo } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case add_todo:
            return [...state, { todo: action.payload, done: false }]
        default:
            return state
    }
}