import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg-py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute right-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg-bold-99">منطقه کمپ پوتوک ترونو</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          تورهای مسافرتی توسط آژانس‌های گردشگری عرضه می‌شوند. خدمات موجود در
          تورهای مسافرتی شامل رزرو اقامتگاه، خرید بلیط وسیله نقلیه، هماهنگی برای
          صدور ویزا، خرید بیمه مسافرتی، هزینه‌های مربوط به تور لیدر، هزینه‌های
          مربوط به وعده‌های غذایی مسافران، هزینه‌های مربوط به خرید بلیط ورودیه
          جاذبه‌های گردشگری و مکان‌های دیدنی می‌شود.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">نظرات عالی</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button type="button" title="دانلود برنامه" varient="btn_green" />
                <Button type="button" title="چگونه کار میکنیم؟" varient="btn_white_text" icon="/play.svg" />
        </div>

      </div>

      {/*  */}
      <div className="relative flex flex-1 items-center">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">مکان</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="regular-20 text-white">سفر به نصف جهان</p>
          </div>

              <div className="flexBetween">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">مسافت</p>
                  <p className="bold-20 text-white">178.29 KM</p>
                </div>
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">ارتفاع</p>
                  <p className="bold-20 text-white">2.030 KM</p>
                </div>
              </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
