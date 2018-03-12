import { ADD_ARTICLE } from "../constants/action-types";


// actions are objs, build an action with a simple function that takes 1 parameter
//it returns a new ready to dispatch action obj with a "type" and "payload"
 export const addArticle = article => (
  { type: ADD_ARTICLE, payload: article }
)
