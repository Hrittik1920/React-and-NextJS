'use client'

import { useEffect } from "react"

export default function({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log(error)
    }, [error])

    return (
        <div className="flex flex-col justify-center items-center h-[90vh]">
            <h2 className="text-3xl font-bold">Sorry! Something went wrong...</h2>
            <button
                onClick={
                    // Attemp to recover by trying to re-rendering the segment
                    () => reset()
                }
                className='p-3 py-2 bg-blue-500 rounded-full m-2'
            >
                Try Again
            </button>
        </div>
    )
}