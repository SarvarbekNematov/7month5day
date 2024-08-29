import { Actions } from "./actions";

const initialState = {
    products : []
}

export const reducer = (state = initialState , action ) => {
    switch(action.type){
        case Actions.GET_DATA :
            return {
                products : [...state.products , ...action.payload]
            };
        default : return state
    }
}