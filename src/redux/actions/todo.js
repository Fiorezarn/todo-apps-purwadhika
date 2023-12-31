export const incrementTodoCount = () => {
  return {
    type: "INCREMENT_TODO_COUNT",
  };
};

export const decrementTodoCount = () => {
  return {
    type: "DECREMENT_TODO_COUNT",
  };
};

export const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};
