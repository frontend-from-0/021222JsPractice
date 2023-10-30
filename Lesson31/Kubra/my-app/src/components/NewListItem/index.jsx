import { useState } from "react";
import './styles.css';

export const NewListItem = ({ addNewItem }) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addNewItem(text);
            setText('');
        } 
        console.log(text);
    }


    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Add new item" 
            value={text} 
            onChange={handleChange}
          />
          <button 
            type="submit" 
            className="btn-submit">
                Submit
          </button>
        </form>
    )

}