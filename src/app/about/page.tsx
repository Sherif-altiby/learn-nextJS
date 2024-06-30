import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-between">
    <div className="md:w-[50%] mb-9 md:mb-0" >
      <h2 className="text-2xl text-center md:text-left text-btnColor font-bold mb-10 " > About Agency </h2>
       <h1 className="text-xl text-center md:text-left md:text-3xl font-bold mb-3 " > We create digital ideas that are bigger, bollder, barve and better. </h1>
       <p className="text-[13px] my-10" > Lorem ipsum dolor adipisicing elit. Hic non similique fugit et sit amet consectetur adipisicing elit. Hic non similique fugit et adipisicing elit. Hic non similique fugit et facilis repellendus consequatur eaque libero illo, quod.</p>
       <div className="flex gap-3 items-center flex-wrap" >
           <div className="flex flex-col justify-center w-[160px] h-[100px] items-center" > <h2 className="text-btnColor text-3xl font-bold " >10 K+</h2> <p className="text-sm" >Year of experience</p> </div>
           <div className="flex flex-col justify-center w-[160px] h-[100px] items-center" > <h2 className="text-btnColor text-3xl font-bold " >10 K+</h2> <p className="text-sm" >Year of experience</p> </div>
           <div className="flex flex-col justify-center w-[160px] h-[100px] items-center" > <h2 className="text-btnColor text-3xl font-bold " >10 K+</h2> <p className="text-sm" >Year of experience</p> </div>
       </div>
     </div>
    <div className="md:w-[50%] mb-9 md:mb-0 md:h-[350px] " >
        <div className="relative w-[300px] md:w-[100%]  h-[300px] md:h-[400px] " > <Image src="/about.png" alt="hero-img" fill className="object-contain" /> </div>
     </div>
 </div>
  )
}

export default AboutPage