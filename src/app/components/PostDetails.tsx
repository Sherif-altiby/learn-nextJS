const PostDetailsComponet = ( {title, body}: {title: string, body: string} ) => {
    return(
        <div className="p-5 rounded-lg bg-indigo-950" >
        <h2 className="text-center text-xl font-bold text-teal-500"> {title} </h2>
        <p className="text-center text-lg font-semibold text-teal-500"> {body} </p>
      </div>
    )
}

export default PostDetailsComponet