import { AvatarType } from "../types"
import { NameAvatar } from "./NameAvatar"

const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
            <div className="col-span-8">
                <div className="">
                    <div className="h-5 bg-gray-300 rounded-full w-5/6 mb-2"></div>
                    <div className="h-5 bg-gray-300 rounded-full w-4/6"></div>
                </div>

                <div className="mt-2">
                    <div className="h-4 bg-gray-200 rounded-full w-2/6"></div>
                </div>

                <div className="pt-4">
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-3/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-4/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-4/6 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6 mb-2"></div>
                </div>
            </div>
         
            <div className="col-span-4">
                <div className="text-slate-600 font-semibold ">
                    <div className="h-4 bg-gray-200 rounded-full w-1/6"></div>
                </div>


                <div className="flex items-center">
                    <div className="pr-4 ">
                        <NameAvatar size={AvatarType.Big} name="loading" loading={true}/>
                    </div>
                    <div className="mt-4">    
                        <div className="h-4 bg-gray-300 rounded-full w-20"></div>

                        <div className="pt-2 text-slate-500">
                            <div className="h-4 bg-gray-200 rounded-full w-72 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded-full w-52"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FullBlogSkeleton