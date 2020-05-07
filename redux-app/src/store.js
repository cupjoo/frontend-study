import { createStore } from "redux"

const initState = {
    mode: 'WELCOME',
    welcome_content: {
        title: 'WEB',
        desc: 'Hello, WEB'
    },
    selected_content_id: 1,
    contents: [
        {id:1, title:'HTML', desc: 'HTML is ...'},
        {id:2, title:'CSS', desc: 'CSS is ...'},
        {id:3, title:'Javascript', desc: 'Javascript is ...'},
    ]
};

const reducer = (state=initState, action) => {
    if(action.type === 'WELCOME'){
        return {...state, mode: 'WELCOME'};
    }
    if(action.type === 'READ'){
        return {...state, mode: 'READ', selected_content_id: action.id}
    }
    if(action.type === 'CREATE'){
        return {...state, mode: 'CREATE'}
    }
    if(action.type === 'UPDATE'){
        return {...state, mode: 'UDPATE'}
    }
    return state;
};

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
