import React from 'react'

const getUserName = async ({userId}: {userId: number}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if(!response.ok){
        throw new Error("There is something wrong")
    }

    return response.json();
}

const UserPost = async ({userId}: {userId: number}) => {
 
    const user = await getUserName({userId})

    console.log(user)

  return (
    <div>
        <div>
            <p>Author</p>
            <h3 className="text-sm text-gray-500"> {user.username} </h3>
          </div>
    </div>
  )
}

export default UserPost