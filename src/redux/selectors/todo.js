export const getTodoState = store => store.todo;

export const getTodoList = store => {
    return getTodoState(store)
}