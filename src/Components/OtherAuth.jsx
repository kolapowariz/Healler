const OtherAuth = () => {
    return (
        <div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="flex w-full justify-center border border-teal-400 rounded-full  px-3 py-1.5 text-md font-semibold leading-6 text-black shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Sign in with Phone
                </button>
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="flex w-full justify-center border border-teal-400 rounded-full  px-3 py-1.5 text-md font-semibold leading-6 text-black shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Sign in with Google
                </button>
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className="flex w-full justify-center border border-teal-400 rounded-full  px-3 py-1.5 text-md font-semibold leading-6 text-black shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Sign in with Apple
                </button>
            </div>
        </div>
    )
}

export default OtherAuth;