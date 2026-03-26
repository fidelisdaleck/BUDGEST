"use client"

interface Inputprops{
    label:string;
    type?:string;
    placeholder?:string;
}

export default function Input({label, type = "text", placeholder}: Inputprops){
    return(
        <div className="space-y-2">
            <div className="flex flex-col gap-2 font-medium">{label}</div>
            <input 
                type={type}
                placeholder={placeholder}
                className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none" 
            />
        </div>
    )
}