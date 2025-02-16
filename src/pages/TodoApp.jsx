import React, { useState } from 'react'

    const TodoApp = () => {
    const[todos,setTodos]=useState([]); //pretending the todos dynamilacally when user create a todo
    const[input,setInput]=useState('');
    const[editid,setEditId]=useState(null);
    const[editText,setEditText]=useState("");
    

    //function to create todo
    const addTodo=()=>{
        if(input.trim()){
            setTodos([...todos,{id:Date.now(),text:input,done:false}])
            setInput('')
        }

    }
    //function to remove todo
    const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))

    }
    //function to TOggle todo
    const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo))

    }

    //Function to Edit todo
    const StartEdit=(id)=>{
        setEditId(id)
        setEditText(text)

    }
    
    //function to Save-edit todo
    const SaveEdit=(id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,text:editText}:todo))
        setEditId(null)
        setEditText("")


    }
  return (
    <div>
        <h1 className="text-white text-center m-4" style={{fontFamily: "Oswald, serif",fontWeight:"850"}}>TO DO APP</h1>

        <div className='container container border border-warning rounded-3 w-25 p-2 text-center position-absolute top-50 start-50 translate-middle bg-dark'>
           {/*input-start*/}
            <div className=' d-flex p-3'>  
                {/* Todo list items start */}
               <input
               class='form-control border border-success'
               type='text'
               value={input}
               placeholder='enter todo...'
               onChange={(e)=>setInput(e.target.value)}
               />
                 {/*addbtn-start*/}
               <button className='btn btn-success mx-3' onClick={()=>addTodo()}>addtodo</button>
                  {/*addbtn-end*/}
            </div>
                
                  {/* todolist start */}
            <div className=''>
                {todos.map((todo)=>(
                <li key={todo.id} className='list-group-item'>
                       {/* editing the text */}
                    {
                        editid==todo.id?(
                            <input
                            className='form-control border border-success'
                            type='text'
                            value={input}
                            placeholder='enter todo...'
                            onChange={(e)=>setInput(e.target.value)}
                            style={{ width: "170px", display: "inline-block", padding: "5px", fontSize: "14px" }}
                            />  
                        ):(
                            <span className={todo.done?"text-decoration-line-through text-secondary":"text-white"}>{todo.text}</span>
                        )

                
                    }

                    {/* buttons */}
                    {
                       editid===todo.id?(
                               <button className='btn btn-success m-2' onClick={SaveEdit(todo.id)}>Save</button>

                        ):(
                            <>
                               <button className='btn btn-primary mx-2' onClick={()=>StartEdit(todo.id,todo.text)}>Edit</button>
                               <button className={`btn ${todo.done? "btn-warning":"btn-info"}mx-2`} onClick={()=>toggleTodo(todo.id)}>{todo.done?"Undo":"Done"}</button>
                            </>
                        )
                    }
                    <button className='btn btn-danger mx-2' onClick={()=>removeTodo(todo.id)}>Delete</button>
            
                </li>
                ))}
            </div>
            {/* todolist end */}

      
        </div>
    </div>
  );
};

export default TodoApp
