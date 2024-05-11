
const page = (props: any) => {
  return (
    <div>
        <h1 className="text-center text-xl" >Article Title</h1>
        <h3 className="text-center text-3xl" > {props.params.title} </h3>
    </div>
  )
}

export default page