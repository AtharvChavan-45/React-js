import React,{useId} from 'react'
// forwardRef is a React function that allows a parent component
//  to send a ref through a component to a child DOM element.

// forwardRef forwards the ref from the parent to the actual HTML element.
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props

}, ref ){
    const id =useId()
    return(
        <div className='w-full'>
            {/*It is conditional rendering 
            means if label exists is true , render the <label>
            if label is false, null, undefined or empty render nothing */}
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
                </label>
                }
                <input type={type}
                className={`px-3 py-2 rounded-lg bg-white
                    text-black outline-none focus:bg-gray-50
                    duration-200 border border-gray-200 w-full ${className}`}
                    ref = {ref} // provide reference in parent components
                    {...props}
                    id={id}
                 />
        </div>
    )
})



export default Input
