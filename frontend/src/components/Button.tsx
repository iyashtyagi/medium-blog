interface ButtonInput {
    label: string;
    onClickHandler : ()=>void;
}

export const Button = ({label, onClickHandler}:ButtonInput) =>{
    return <button onClick={onClickHandler} type="button" className="text-white w-full mt-6 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2">{label}</button>
}