export const metadata = {
  title: "Articles Page"
}

const layout = (  { children }: { children: React.ReactNode } ) => {
  return (
    <div>
         <div className="text-center text-5xl" >From Layout</div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout