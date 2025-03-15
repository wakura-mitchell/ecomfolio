import Button from "../components/Button"

const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className=" max-container flex justify-between items-center max-lg:flex-col gap-10">
            <h3 className="text-3xl leading-[68-px] lg:max-w-md font-palanquin font-bold">
                Sign Up form
                <span className=" text-coral-red"> Updates </span> and Newsletters
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input
                    type="text"
                    placeholder="subscribe@teeriecrafts.co.zw"
                    className=" input" />

                <div className="flex sm:justify-end items-center max-sm:w-full">
                    <Button
                        label="Sign up"
                        fullWidth />
                </div>
            </div>
        </section>
    )
}

export default Subscribe