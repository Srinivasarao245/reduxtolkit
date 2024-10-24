import React from "react";
import { useAddTodoMutation } from "../services/todos"

function NewTodo(){   
    var [addTodoFn] = useAddTodoMutation();
        return(
            <div>
                <h1>NewTodo</h1>
                <input type="text" id="a2"/> &nbsp;
                <button onClick={()=>{addTodoFn({title:document.getElementById("a2").value})}}>Add Todo</button>
            </div>
        )
}
export default NewTodo
// Mutation means Modification.