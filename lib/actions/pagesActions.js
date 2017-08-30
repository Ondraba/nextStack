"use strict";
import axios from 'axios';

export function getPages(){
    return function(dispatch){
        axios.get("/pages")
            .then(function(response){
                dispatch({type:"GET_PAGES", payload: response.data})
            })
            .catch(function(err){
                dispatch({type:"GET_PAGES_REJECTED_ACTION", payload:err})
            })
    }
}