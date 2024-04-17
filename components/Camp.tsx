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
    </section>
  );
};

export default Camp;
