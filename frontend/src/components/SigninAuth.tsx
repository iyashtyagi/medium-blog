import { SinginInput } from "@yashtyagi/medium-common"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputBox, InputBoxType } from "./InputBox"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SigninAuth = () => {

    const navigate = useNavigate();

    const [postInput, setPostInput ] = useState<SinginInput>({
        email: "",
        password: ""
    })

    async function sendRequest(){ 
        const singupUrl = `${BACKEND_URL}/user/signin`;
        try {
            const response = await axios.post(singupUrl, postInput)
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blog");
        } catch (error) {
            alert("Something went wrong");
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>

                <div className="px-10 py-6">
                    <div className="text-3xl font-bold">
                        Login into account
                    </div>

                    <div className="text-slate-500 flex justify-center">
                        Don't have an account? <Link to={"/signup"} children="Signup" className="underline pl-2"/>
                    </div>
                </div>

                <div>
                    <InputBox label="Email" placeholder="me@example.com" onChange={(e) =>{
                        setPostInput({...postInput, email:e.target.value})
                    }} />
                    <InputBox label="Password" type={InputBoxType.Passowrd} placeholder="12345678" onChange={(e) =>{
                        setPostInput({...postInput, password:e.target.value})
                    }} />

                    <Button onClickHandler={sendRequest} label="Sign in"/>

                </div>

            </div>

        </div>
    </div>
}