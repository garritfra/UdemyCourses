var initialState = {
  count: 0
}

function rootReducer(state = initialState, action) {

  debugger
  switch (action.type) {
    case "INCREMENT":
      var newState = {...state};
      newState.count++;
      return newState;
      break;
  
    case "DECREMENT":
    var newState = {...state};
    newState.count--;
    return newState;
    break;

    default:
      return state;
      break;
  }
}

var store = Redux.createStore(rootReducer);

$(document).ready(function() {
  $("#counter").text(store.getState().count);

  $("#increment").on("click", function() {
    store.dispatch({type: "INCREMENT"})
    $("#counter").text(store.getState().count);
  })

  $("#decrement").on("click", function() {
    store.dispatch({type: "DECREMENT"})
    $("#counter").text(store.getState().count);
  })
})