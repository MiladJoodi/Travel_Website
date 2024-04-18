import Image from "next/image";

const FeatureItem = ({icon, title, description}) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-4 lg:p-7 bg-green-50">
                <Image src={icon} alt="map" width={28} height={28} />
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5">{title}</h2>
            <p className="regular-16 mt-5 bg-white/50 text-gray-30 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    );
}

export default FeatureItem;