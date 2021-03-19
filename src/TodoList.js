const TodoList = ({ todos, removeTodo, setTodo }) => {

  return (

    <div>

          {todos.map(todo => {
            return (
            
            <div className="list-group">

              <div class="list-group-item list-group-item-action">

                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{todo.name}</h5>
                  {/* <small class="text-muted">Quest ID #{todo.id}</small> */}
                  <small class="text-muted">Difficulty: {todo.difficulty}</small>
                </div>

                <p class="mb-1">{todo.description}</p>

                {/* <small class="text-muted">Difficulty: {todo.difficulty}</small> */}
                <small class="text-muted">Quest ID #{todo.id}</small>

                </div>

                <button
                  className='btn btn-success mb-2'
                  onClick={() => removeTodo(todo.id)}>
                  Complete quest
                </button>

            </div>
            

            );
          })}

    </div>

  );
};

export default TodoList;
