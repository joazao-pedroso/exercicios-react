import { ArrowLeft } from "lucide-react";

export function Back(){
    return(
        <a href="/" className="border w-16 h-16 hover:animate-bounce shadow-2xl rounded-full flex items-center justify-center border cursor-pointer">
           <ArrowLeft className="w-6 h-6 text-white" />
        </a> 
    )
}