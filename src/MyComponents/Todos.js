import React from 'react'
import  {TodoItem} from "./TodoItem";
export const Todos = (props) => {
  let myStyle={
    minHeight:"90vh",
    padding:"20px",
    margin:"auto"
  }
  return (
    <div className="container" style={myStyle}>
        <h3 className='my-3' >Todos List</h3>
        {props.todos.length===0 ? <h4>"No Todo's to display"</h4> :
        props.todos.map((todo)=>{
          return( 
          <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
         </>
          )
        })
        }
    </div>
  )
}
