import Button from "../components/Button"
import { tvStand2 } from "../assets/images"
const SupperQuality = () => {
    return (
        <section id="about-us" className=" flex justify-between items-center  max-lg:flex-col gap-10 w-full max-container">
            <div className=" flex flex-1 flex-col">
                <h2 className=" mt-10 font-palanquin text-2xl capitalize font-bold lg:max-w-lg"> I provide you <span className=" text-coral-red inline-block mt-3"
                >Super</span>
                    <br />
                    <span className=" text-coral-red inline-block mt-3"
                    >Quality</span> Furniture
                </h2>

                <p className=" mt-4 lg:max-w-lg info-text">
                    Discover modern-stylish furniture crafted with quality and
                    durable materials made with an innovative mind to accompany you in your active life.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    My dedication to detail and excellence ensures your satisfaction
                </p>

                <div className="mt-11"><Button label='View more' /></div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={tvStand2} alt="shoe8"
                    width={517}
                    height={522}
                    className=" object-contain" />
            </div>
        </section>
    )
}

export default SupperQuality