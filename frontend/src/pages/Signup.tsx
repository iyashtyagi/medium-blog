import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <div className="flex justify-between">
        <div className="w-full md:w-1/2">
            <Auth />
        </div>

        <div className="hidden md:block w-1/2">
            <Quote />
        </div>
    </div>
}