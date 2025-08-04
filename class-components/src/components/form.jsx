import { Component } from "react";
import { useState } from "react";

// function ClassInput() {

//     const [todos, setTodos] = useState(["Hello world", "No body"]);
//     const [inputVal, setInputVal] = useState("");

//     const handleInputChange = (e) => {
//         setInputVal((e.target.value).trim());
//     }

//     const handleSubmit = () => {
//         if (inputVal){
//             setTodos((prevTodos) => [...prevTodos, inputVal])
//             setInputVal("")
//         }
//     }

//     return (
//       <>
//         <h1>Form</h1>
//         <form onSubmit={(e) => e.preventDefault()}>
//             <label htmlFor="input">
//             <input type="text" value={inputVal} onChange={handleInputChange}/>
//             </label>
//         </form>

//         <ul>
//             {todos.map((todo, index) => {
//                 return <li key={index}>{todo}</li>
//             })}
//         </ul>
//         <button onClick={() => handleSubmit()}>add todo</button>
//       </>
//     );

// }

// the state gets initialized as a part of the constructor.
class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Hello world", "No body"],
      inputVal: "",
      isEdit: false,
      editIndex: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this); // this is how functions are called by binding them to the constructor
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit() {
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal?.trim()),
      inputVal: "",
    }));
  }

  handleDelete(index) {
    this.setState((state) => {
        const todos = [...state.todos]
        todos.splice(index, 1);
        return { todos };
    })
  }

  handleEdit(index) {
    this.setState((state) => ({
        isEdit: true,
        editIndex: index,
        inputVal: state.todos[index]

    }))}

    handleResubmit() {
        this.setState((state) => {
            const todos = [...state.todos];
            todos[state.editIndex] = state.inputVal.trim();
            return {
                todos,
                isEdit: false,
                editIndex: null,
                inputVal: "",
            };
        });
    }
  

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="input">
            <input
              type="text"
              id="input"
              value={this.state.inputVal}
              onChange={this.handleInputChange}
              disabled={this.state.isEdit}
              style={{display: this.state.isEdit ? "none" : "block"}}
            />
          </label>
        </form>

        <ul>
          {this.state.todos.map((todo, index) => {
            if(this.state.isEdit && this.state.editIndex === index) {
                return(
                    <li key={todo}>
                        <input type="text" value={this.state.inputVal} onChange={this.handleInputChange}/>
                        <button onClick={this.handleResubmit}>Resubmit</button>
                    </li>
                );
            } else {
                            return (
                              <li key={todo}>
                                {todo}
                                <button
                                  onClick={() => this.handleDelete(index)}
                                >
                                  Delete
                                </button>
                                <button onClick={() => this.handleEdit(index)}>Edit</button>
                              </li>
                            );
            }
          })}
        </ul>
        <button onClick={() => this.handleSubmit()} disabled={this.state.isEdit}>add todo</button>
      </>
    );
  }
}
export default ClassInput;
