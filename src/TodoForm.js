const TodoForm = ({ todo, setTodo, saveTodo }) => {
    
    const handleSubmit = event => {
      event.preventDefault();
      console.log('Submit runs! What is task?', todo);
      saveTodo();
  
    };
  
    return (
        <div>
          
          <form action='submit' id='todo-form' onSubmit={handleSubmit}>
            
            <div className='form-group'>
              <label htmlFor='todoName'>Quest</label>
              <input
                type='text'
                className='form-control'
                id='todoName'
                value={todo.name}
                onChange={event => {
                  setTodo({...todo, name: event.target.value });
                }}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='todoName'>Description</label>
              <input
                type='text'
                className='form-control'
                id='todoDescription'
                value={todo.description}
                onChange={event => {
                  setTodo({...todo, description: event.target.value });
                }}
              />
            </div>

            <div className="form-group">
                <label htmlFor="todoDifficulty">Choose difficulty</label>
                <select
                className="form-control"
                id="todoDifficulty"
                value={todo.difficulty}
                onChange={event => {
                  setTodo({...todo, difficulty: event.target.value});
                }}
                >
                    <option>Easy</option>
                    <option>Normal</option>
                    <option>Hard</option>
                    <option>Very Hard</option>
                    <option>Must Die</option>
                </select>
            </div>
  
            <button className='btn btn-primary'>Start quest</button>

          </form>

        </div>
    );
  };
  
  export default TodoForm;
  