import Image from "next/image";

export const metadata = {
  title: "Home Page"
}
export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
       <div className="md:w-[50%] mb-9 md:mb-0" >
          <h1 className="text-xl sm:text-4xl text-center md:text-left md:text-6xl font-bold mb-3 " > Creative Thoghts Agencey. </h1>
          <p className="text-[12px] my-10" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non similique fugit et facilis repellendus consequatur eaque libero illo, quod.</p>
          <div className="flex gap-3 justify-center md:justify-start " >
            <button className="cursor-pointer bg-btnColor text-white rounded-sm w-[120px] py-3 text-sm font-bold" > Learn More </button>
            <button className="cursor-pointer bg-white text-black rounded-sm w-[120px] py-3 text-sm font-bold" > Contact </button>
          </div>
          <div className="relative mx-auto w-[90%] mt-6 h-10" > <Image src="/brands.png" alt="prands-img" fill /> </div>
       </div>
       <div className="md:w-[50%] mb-9 md:mb-0 md:h-[500px] " >
           <div className="relative w-[300px] md:w-[100%]  h-[300px] md:h-[500px] " > <Image src="/hero.gif" alt="hero-img" fill className="object-contain" /> </div>
        </div>
    </div>
  );
}
