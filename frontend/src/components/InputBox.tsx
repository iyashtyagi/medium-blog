import { ChangeEvent } from "react";

export enum InputBoxType{
    Text = "text",
    Passowrd = "password"
}

interface InputType { 
    label : string;
    type? : InputBoxType;
    placeholder: string;
    onChange : (e: ChangeEvent<HTMLInputElement>)=> void;
}

export const InputBox = ({ label, type=InputBoxType.Text, placeholder, onChange }: InputType) =>{
    return <div className="pt-4">
        <label className="block mb-2 text-sm font-medium text-black">{label}</label>
        <input onChange={onChange} type={type} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div>
}