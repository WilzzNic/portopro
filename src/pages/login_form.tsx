import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

export function Form() {
    return (
        <>
            <div className="container">
                <div className="p-8">
                    <h1 className="tracking-wide text-2xl font-bold">
                        WELCOME!
                    </h1>
                    <p className="text-base">
                        Please login to begin to showcase your skills to the
                        public 🤪
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="p-8">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-row items-center bg-gray-100 p-4 rounded-xl">
                            <div className="basis-2/12 self-center">
                                <AiOutlineUser
                                    className="mx-auto"
                                    size="42"
                                />
                            </div>
                            <div className="basis-10/12 self-center">
                                <label
                                    htmlFor="txt-username"
                                    className="m-2 text-sm block"
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
                        <div className="flex flex-row items-center bg-gray-100 p-4 rounded-xl mt-4">
                            <div className="basis-2/12 self-center">
                                <AiOutlineLock
                                    className="mx-auto"
                                    size="42"
                                />
                            </div>
                            <div className="basis-10/12 self-center">
                                <label
                                    htmlFor="txt-password"
                                    className="m-2 text-sm block"
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
                    </div>
                </div>
            </div>
        </>
    );
}