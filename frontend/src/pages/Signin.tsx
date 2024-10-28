import { Quote } from "../components/Quote"
import { SigninAuth } from "../components/SigninAuth"

export const Signin = () => {
    return<div className="flex justify-between">
    <div className="w-full md:w-1/2">
        <SigninAuth />
    </div>

    <div className="hidden md:block w-1/2">
        <Quote />
    </div>
</div>
}