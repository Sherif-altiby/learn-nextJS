"use client"

import { useEffect, useState } from "react"

const Todo = () => {
  
    const [todo, setTodo] = useState<string>("");
    useEffect(() => {

        const  fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",
                {
                    next: {
                        revalidate: 30,
                    }
                }
            );
            const data = await response.json();
            setTodo(data.title)
        }

        fetchData()
     }, [])

  return (
    <div>
        <h1 className="text-center text-3xl" > {todo} </h1>
    </div>
  )
}

export default Todo