"use strict";

const exampleInitialState = {
  title: 'test2'
}

export function pagesReducer(state={
pages:exampleInitialState
}, action){
    switch(action.type){

        case "GET_PAGES":
        return {...state, pages:[...action.payload]};
        break;
    }

return state
}

