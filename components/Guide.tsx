import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          ما اینجاییم برای شما ❤
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="md:bold-40 bold-32 lg:bold-64 xl:max-w-[390px]">شما را به مسیر آسان راهنمایی می کنیم</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            برای برنامه‌ریزی سفر به مقاصد مختلف نیاز همه ما نیاز به راهنما و کسب
            اطلاعات داریم و علاوه بر آن باید نوع وسیله حمل و نقل و محل اسکان خود
            را مشخص کنیم. همواره سایت‌هایی برای ارائه این خدمات وجود دارند. در
            این مطلب قصد داریم تا بهترین سایت های سفر و گردشگری ایران که
            می‌توانند خدمات مختلفی مثل خرید بلیط، رزرو هتل و محل‌های اقامت مختلف
            در شهرهای ایران را به شما ارائه دهند معرفی کنیم.
          </p>
        </div>
      </div>

        {/*Info */}
      <div className="flexCenter max-container relative w-full">
        <Image src="/boat.png" alt="boat" width={1440} height={580} />
        <div className="absolute flex bg-white lg:py-8 p-2 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
        <Image
            src="meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col py-4">
                <div className="flex w-full flex-col">
                    <div className="flexBetween w-full">
                        <p className="regular-16 text-gray-20">مسیر</p>
                        <p className="bold-16 to-green-50">48 دقیقه</p>
                    </div>
                    <p className="bold-20 mt-2">جنگل مازندران</p>
                </div>

                <div className="flex w-full flex-col">
                        <p className="regular-16 text-gray-20">شروع مسیر</p>
                        <h4 className="bold-20 mt-2 whitespace-nowrap">
                            جنگل دالخانی
                        </h4>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
