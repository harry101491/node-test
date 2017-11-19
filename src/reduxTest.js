const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const state = {
    visibility_filter: "SHOW_ALL",
    todos: [
        {   
            text: "Call to a Friend",
            completed: false
        },
        {
            text: "get the groceries",
            completed: true
        }
    ]
}

const initialState = {
    visibility_filter: "SHOW_ALL",
    todos: []
}

// Reducer for the TODO App
const todo = (state = initialState, action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            // return Object.assign({}, state, {visibility_filter: action.filter});
            return {...state, visibility_filter: action.filter};
    }
    // switch(action.type) {
    //     case ADD_TODO:
    //         return state.concat([{ text: action.type, completed: false}]);
    //     case TOGGLE_TODO:
    //         return state.map(
    //             (todo_element, index) => {
    //                 if(action.index === index) {
    //                     return {text: todo_element.text, completed: !todo_element.completed};
    //                 }
    //                 else {
    //                     return todo_element;
    //                 }
    //             }
    //         );
    //     default:
    //         return state;
    // }
}

console.log(todo(initialState, {
    type: SET_VISIBILITY_FILTER,
    filter: "SHOW_COMPLETED"
}));

// Reducer to update the state object in the TODO App


// const todo = (state = {}, action) => {
//     switch(action.type) {
//         case ADD_TODO:
//             return state.concat([{ text: action.type, completed: false}]);
//         case TOGGLE_TODO:
//             return state.map(
//                 (todo_element, index) => {
//                     if(action.index === index) {
//                         return {text: todo_element.text, completed: !todo_element.completed};
//                     }
//                     else {
//                         return todo_element;
//                     }
//                 }
//             );
//         default:
//             return state;
//     }
// }

// const fetch = require("node-fetch");
// import Q from "q";

// using the new ecma feature 2016 async/await
// async function fetchAlbums() {
//     try {
//         const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
//         const jsonObj = await res.json();
//         console.log(`the value of json is: ${JSON.stringify(jsonObj)}`);
//     }
//     catch(err) {
//         console.log("error occured while fetching the data");
//         return err;
//     }
// }
// fetchAlbums();

// module.exports.fetchAlbums = fetchAlbums;


// var https = require("https");

// var options = {
//     hostname: "en.wikipedia.org",
//     port: 443,
//     path: "/wiki/George_Washington",
//     method: "GET",
//     headers: {
//         accept: "*/*"
//     }
// };

// var data;
// https.request(options, (res) => {
//     console.log("responce has started");
//     console.log(`Server Status: ${res.statusCode}`);
//     console.log(`Headers returned from the server are: ${res.headers}`);
// });

// console.log("request has been made to the server");

// https.get("https://en.wikipedia.org/wiki/Narendra_Modi", function(res) {
//     console.log("the responce status code is: "+ res.statusCode);

//     res.on("data", (chunk) => {
//         process.stdout.write(chunk);
//     });

// });