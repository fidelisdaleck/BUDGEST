"use client"

interface Inputprops{
    label:string;
    type?:string;
    value?:string;
    placeholder?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, type = "text", value, placeholder, onChange}: Inputprops){
    return(
        <div className="space-y-2">
            <div className="flex flex-col gap-2 font-medium">{label}</div>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                className="border p-2 w-full rounded-lg focus:ring focus:ring-green-300 outline-none" 
                onChange={onChange}
            />
        </div>
    )
}