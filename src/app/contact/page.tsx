import Image from "next/image"

const ContactPage = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center" >
          <div className="relative w-[100%] h-[200px] md:w-[45%] md:h-[350px]" > <Image src="/contact.png" alt="contact-img" fill className="object-contain" /> </div>
          <div className=" w-[100%] md:w-[40%]" >
              <form action="">
                  <input className="block w-[100%] border-none outline-none bg-bgSoft rounded-sm p-2 my-3" type="text"  placeholder="Name" />
                  <input className="block w-[100%] border-none outline-none bg-bgSoft rounded-sm p-2 my-3" type="text"  placeholder="Email"/>
                  <input className="block w-[100%] border-none outline-none bg-bgSoft rounded-sm p-2 my-3" type="text" placeholder="Phone" />
                  <textarea className="bg-bgSoft block w-[100%] border-none outline-none my-3 rounded-sm p-2 h-[150px]" name="msg" placeholder="Message" id=""></textarea>
                  <button  className="w-full text-white bg-btnColor p-2 rounded-md cursor-pointer" > Send </button>
              </form>
          </div>
      </div>
    )
  }
  
  export default ContactPage