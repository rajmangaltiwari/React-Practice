import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
const Hero = () => {
    return (
        <div className="flex justify-between mx-45 mt-10 gap-5">
            <div className="w-1/2  h-100">
                <div className="flex justify-between w-full">
                    <button className="inline-flex items-center gap-2 bg-black text-white px-7 py-2 rounded"> <MdMessage /> VIA SUPPORT CHAT</button>
                    <button className="inline-flex items-center gap-2 bg-black text-white px-15 py-2 rounded"> <IoMdCall /> VIA CALL</button>
                </div>
                <div className="mt-5">
                    <button className="inline-flex items-center justify-center gap-2 w-full py-2 rounded border"><MdMessage /> VIA EMAIL FORM</button>
                </div>
                <div className="mx-10 mt-10">
                    <form action="">
                        <div className="relative mt-5">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm" htmlFor="name">Name</label>
                            <input className="h-10 border w-full" type="text" placeholder="your name" />
                        </div>

                        <div className="relative mt-5">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm" htmlFor="name">Email</label>
                            <input className="h-10 border w-full" type="text" placeholder="your name" />
                        </div>

                        <div className="relative mt-5">
                            <label className="absolute -top-3 left-3 bg-white px-1 text-sm" htmlFor="name">Message</label>
                            <textarea className=" border w-full" type="text" placeholder="your name" name="message" id="" rows={4}></textarea>
                        </div>
                        <div className="flex justify-end mt-3">
                            <button className="bg-black text-white px-10 py-2 rounded">SUBMIT</button>
                        </div>

                    </form>
                </div>

            </div>
            <div className="w-1/2 ">
                <img className="" src="/images/hero_image.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero