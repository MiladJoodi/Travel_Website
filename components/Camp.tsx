import Image from "next/image";
import CompSite from "./CompSite";

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CompSite
          backgroundImage="bg-bg-img-2"
          title="پوتوک تورنو کمپ"
          subtitle="پریگن، پاسوروان"
          peopleJoined="+50 نفر"
        />
        <CompSite
          backgroundImage="bg-bg-img-1"
          title="کمپ کوهستانی"
          subtitle="پریگن، پاسوروان"
          peopleJoined="+50 نفر"
        />
      </div>

      {/*  */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-16 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
            <strong>دلتنگی</strong> و راه را بلد نسیتی؟
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            با خرید تورهای مسافرتی می‌توانید در وقت و حتی هزینه خود صرفه‌جویی
            کنید. اگر خودتان قصد برنامه‌ریزی برای سفر کردن به یک شهر یا کشور
            دیگر را داشته باشید، لازم است که به‌طور جداگانه خدمات موجود در یک
            تور را خریداری کنید.
          </p>
          <Image 
          src="/quote.svg"
          alt="camp-2"
          width={186}
          height={219}
          className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
