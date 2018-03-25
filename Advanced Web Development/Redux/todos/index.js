var initialState = {
  todos: [],
  id: 0
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      var newState = {...state}
      newState.id++;
      
      return {
        ...newState,
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      }
      break;
    
    case 'REMOVE_TODO':
      let todos = state.todos.filter(val => val.id !== +action.id)
      return {...state, todos}
      break;

    default:
      return state;

  }
}

var store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

$(document).ready(function() {
  $("ul").on("click", "button", function(event) {
    store.dispatch({
      type: "REMOVE_TODO",
      id: $(event.target).attr("id")
    })
    $(event.target).parent().remove()
  })

  $('form').on("submit", function(event) {
    event.preventDefault()
    var newTask = $('#task').val()
    store.dispatch({
      type: 'ADD_TODO',
      task: newTask
    })

    let currentState = store.getState()
    var newTask = $("#task").val()
    let newLi = $("<li>", {
      text: newTask
    })

    let removeButton = $("<button>", {
      text: "X",
      id: currentState.id
    })
    newLi.append(removeButton)
    $("#todos").append(newLi);
    $("form").trigger("reset");
  })


})