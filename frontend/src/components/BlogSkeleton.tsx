import { Circle } from "./BlogCard";
import { NameAvatar } from "./NameAvatar";

export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-pulse border-b px-6 lg:px-0 py-5 w-screen max-w-screen-md">
            <div className="flex items-center text-sm">

                <div>
                    <NameAvatar name="loading" loading={true}/>
                </div>

                <div className="pl-2">
                    <div className="h-3 bg-gray-300 rounded-full w-12"></div>
                </div>
                
                <div className="pl-2">
                    {Circle()}
                </div>

                <div className="pl-2">
                    <div className="h-3 bg-slate-200 rounded-full w-12"></div>
                </div>
            </div>
            
            <div className="pt-3">
                <div className="h-6 bg-gray-300 rounded-full w-64"></div>
            </div>

            <div className="pt-3">
                <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
            </div>

            <div className="pt-5">
            <div className="h-3 bg-gray-200 rounded-full w-16 mb-2"></div>
            </div>

        </div>
    </div>
    );
};
