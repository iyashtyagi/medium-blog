import { SingupInput } from "@yashtyagi/medium-common"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputBox, InputBoxType } from "./InputBox"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = () => {

    const navigate = useNavigate();

    const [postInput, setPostInput ] = useState<SingupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest(){ 
        const singupUrl = `${BACKEND_URL}/user/signup`;
        try {
            const response = await axios.post(singupUrl, postInput)
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (error) {
            alert("Something went wrong");
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>

                <div className="px-10 py-6">
                    <div className="text-3xl font-bold">
                        Create an account
                    </div>

                    <div className="text-slate-500 flex justify-center">
                        Already have an account? <Link to={"/signin"} children="Login" className="underline pl-2"/>
                    </div>
                </div>

                <div>
                    <InputBox label="Name" placeholder="Enter your name" onChange={(e) =>{
                        setPostInput({...postInput, name:e.target.value})
                    }} />
                    <InputBox label="Email" placeholder="me@example.com" onChange={(e) =>{
                        setPostInput({...postInput, email:e.target.value})
                    }} />
                    <InputBox label="Password" type={InputBoxType.Passowrd} placeholder="12345678" onChange={(e) =>{
                        setPostInput({...postInput, password:e.target.value})
                    }} />

                    <Button onClickHandler={sendRequest} label="Sign up"/>

                </div>

            </div>

        </div>
    </div>
}