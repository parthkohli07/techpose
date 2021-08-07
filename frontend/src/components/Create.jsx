import React, {useState} from "react";
import axios from "axios";
const space={
    marginBottom:"1%"
}
 function Create(){
     const [input, setInput]= useState({
      title:'',
      content: ''
     })
    function handleChange(event){
        const {name, value}=event.target;
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
        }
        })
     console.log(event.target);
    }
    function handleClick(event){
        event.preventDefault();
        const newNote={
          title:input.title,
          content:input.content

        }
        axios.post("http://localhost:8000/create",newNote)
       }
     
      return  <div className="container">
       <h1>create notes </h1>
        <form method="POST">
        <div className="form-group">

          <input type="text" onChange={handleChange} value={input.title} className="form-control" name="title" style={space} autoComplete="false"></input>
        </div>
        <div className="form-group">

          <textarea onChange={handleChange} value={input.content} className="form-control" name="content" style={space} autoComplete="false"></textarea>
        </div>
        

          <button onClick={handleClick} className="btn btn-lg btn-info" name="submit">ADD NOTES</button>
    
        </form>
    </div>

}
export default Create; 