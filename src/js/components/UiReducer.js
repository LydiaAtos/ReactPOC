export const TOGGLE = "ui/toggle";
export const REMOVE_ACTIVE = "remove/active";
export const SHOW_ALL = "showall";
export const SHOW_ACTIVE = "active";
export const SHOW_COMPLETED = "completed";
export const ADD_TO_LIST = 'add';

const completedList = ['Morning Walk', 'Buy groceries']
const activeList= ['Buy Milk', 'Wash hand', 'Wear Mask']

const initialState = {
  toggle: false,
  active: completedList.concat(activeList),
  userAction: 'all'
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: {
        console.log("action : " + action.type);
        console.log("state : " + state.toggle);
      return {
        ...state,
        toggle: !state.toggle
      };
    }
    case REMOVE_ACTIVE: {
        console.log("action : " + action.type);
        console.log("payload : " + JSON.stringify(action.payload))
        console.log("user action : " + JSON.stringify(state.userAction))
        let finalList = [];
        
        if(state.userAction == 'active') {
          console.log("user action active: " + JSON.stringify(state.userAction))
          const index = activeList.indexOf(action.payload.item);
          if(index != -1) {
            console.log("index " + index);
            var removedItem = activeList.splice(index, 1)
            completedList.push(removedItem);
            finalList = activeList;
          } 
        } else if(state.userAction == 'completed') {
          console.log("user action completed: " + JSON.stringify(state.userAction))
          const index = completedList.indexOf(action.payload.item);
          if(index != -1) {
            console.log("index " + index);
            var removedItem = completedList.splice(index, 1)
            activeList.push(removedItem)
            finalList = completedList;
          } 
        } else {
          console.log("user action all: " + JSON.stringify(state.userAction))
          finalList = completedList.concat(activeList)
        }

      return {
        ...state,
        active: finalList,
      };
    }
    case SHOW_ALL: {
      console.log("action : " + action.type);
      const currentState = "all"
    return {
      ...state,
      active: completedList.concat(activeList),
      userAction: currentState
    };
   }
   case SHOW_ACTIVE: {
      console.log("action : " + action.type);
      const currentState = "active"
    return {
      ...state,
      active: activeList,
      userAction: currentState
    };
  }
  case ADD_TO_LIST:
    console.log("action : " + action.type);
    console.log("text : " + action.payload);
    const currentState = "all";
    activeList.push(action.payload);
    return {
      ...state,
      active: activeList,
      userAction: currentState
    };
  case SHOW_COMPLETED: {
    console.log("action : " + action.type);
    const currentState = "completed"
  return {
    ...state,
    active: completedList,
    userAction: currentState
  };
 }

    default: {
      return { ...state };
    }
  }
};

export const toggleSwitch = () => dispatch => {
  dispatch({ type: TOGGLE });
};