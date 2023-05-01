import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

export function Form() {
    return (
        <form>
            <div className="container p-8">
                <h1 className="tracking-wide text-2xl font-bold">WELCOME!</h1>
                <p className="text-base">
                    Please login to begin to showcase your skills to the public
                    🤪
                </p>
            </div>

            <div className="container p-8">
                <div className="grid grid-cols-1">
                    <div className="flex flex-row items-center bg-gray-100 p-4 rounded-t-xl">
                        <div className="basis-2/12 self-center">
                            <AiOutlineUser
                                className="mx-auto text-gray-400"
                                size="42"
                            />
                        </div>
                        <div className="basis-10/12 self-center">
                            <label
                                htmlFor="txt-username"
                                className="m-2 text-sm block text-gray-400"
                            >
                                Username
                            </label>
                            <input
                                id="txt-username"
                                type="text"
                                className="appearance-none border-0 ring-0 focus:border-0 focus:ring-0 bg-gray-100 py-1 px-2"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center bg-gray-100 p-4 rounded-b-xl">
                        <div className="basis-2/12 self-center">
                            <AiOutlineLock
                                className="mx-auto text-gray-400"
                                size="42"
                            />
                        </div>
                        <div className="basis-10/12 self-center">
                            <label
                                htmlFor="txt-password"
                                className="m-2 text-sm block text-gray-400"
                            >
                                Password
                            </label>
                            <input
                                id="txt-password"
                                type="password"
                                className="appearance-none border-0 ring-0 focus:border-0 focus:ring-0 bg-gray-100 py-1 px-2"
                            />
                        </div>
                    </div>

                    <p className="mt-6">
                        <button className="bg-primary rounded-full text-white px-6 py-2 font-bold mr-4">
                            Sign In
                        </button>

                        <button className="rounded-full text-gray-600 px-6 py-2 font-bold border">
                            Create Account
                        </button>
                    </p>
                </div>
            </div>
        </form>
    );
}
