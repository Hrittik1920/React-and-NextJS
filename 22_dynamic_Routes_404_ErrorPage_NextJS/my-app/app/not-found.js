import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-[90vh]'>
            <h2 className='text-4xl font-bold mb-2'>Not Found</h2>
            <p className='text-lg  text-gray-600 mb-1'>Could not find requested resources</p>
            <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
        </div>
    )
}
