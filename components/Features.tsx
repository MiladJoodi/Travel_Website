import { FEATURES } from "@/constants";
import Image from "next/image";
import FeatureItem from "./FeatureItem";

const Features = () => {
    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                    src="/phone.png"
                    alt="phone"
                    width={440}
                    height={1000}
                    className="feature-phone"
                    />
                </div>
                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <Image 
                        src="/camp.svg"
                        alt="camp"
                        width={50}
                        height={50}
                        className="absolute right-[-5px] top-[-28px] w-10 lg:w-[50px]"
                        />
                        <h2 className="bold-40 lg:bold-64 mt-2">
                        ویژگی های ما
                        </h2>
                    </div>

                    {/* Feature Items */}
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:m-20 lg:gap-20">
                        {FEATURES.map((feature)=>(
                            <FeatureItem 
                            description={feature.description}
                            key={feature.title}
                            title={feature.title}
                            icon={feature.icon}
                            />
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default Features;