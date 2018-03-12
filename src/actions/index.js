import { ADD_ARTICLE } from "../constants/action-types";


// actions are objs, build an action with a simple function that takes 1 parameter
//it returns a new ready to dispatch action obj with a "type" and "payload"
 export const addArticle = article => (
  { type: ADD_ARTICLE, payload: article }
)


//Notes on Actions!

//the only way to change state is to send a signal to the Store
//dispatching an action is the process of sending that signal

//Actions are objects that need 2 things - type and payload
// ex:
// {
//   type: "ACTION_NAME_HERE",
//   payload: thingThatYouWantToSendToStore
// }

//Naming your action - action names should be descriptive and reflect what they do (or what the user is doing)
