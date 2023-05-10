import { useState } from "react";

const Form = () => {




  const [todo, setTodo] = useState([]);
  console.log(todo);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    let addedTodo = e.target.value;
    setInput(addedTodo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <>
      <form type="submit" onSubmit={handleSubmit}>
        <label>Add todo</label>
        <input type="text" value={input} onChange={handleChange} />
        <button>add todo</button>
      </form>
    </>
  );
};

export default Form;