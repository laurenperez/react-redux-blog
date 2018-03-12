import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;


//Notes on Store!

//the store is like the brain of your app = all versions of state are kept here like memories

//methods for accessing store:

//store.getState() - returns an object of your current store
//store.getState() - { articles: Array(0) }

//store.dispatch() - pass in a payload to the "create action" function, it returns a new action obj to be dispatched
//store.dispatch( addArticle( { title: "article", id:1 }))

//store.subscribe() - listens for store updates, takes a callback that does something when the store is updated
//store.subscribe(() => { console.log("redux is happening!")} )
