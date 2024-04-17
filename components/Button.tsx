import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  varient: string;
  full?: boolean;
};

const Button = ({ type, title, icon, varient, full }:ButtonProps) => {
  return (
    <button
      className={`flexCenter regular-20 gap-3 rounded-full border ${varient} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-20  whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
