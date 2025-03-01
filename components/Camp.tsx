import Image from "next/image";

import { PEOPLE_URL } from "@/constants";

interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subTitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      id="camp"
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={"/folded-map.svg"} alt="Map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="Person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 ml-[-5px] text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:mx-auto 2xl:max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-40 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Ranu Kumbolo Camp"
          subTitle="Bromo Tengger Semeru National Park, East Java"
          peopleJoined="100+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Pine Forest Camp"
          subTitle="Lembang, Bandung"
          peopleJoined="80+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Gunung Pancar Campground"
          subTitle="Bogor, West Java"
          peopleJoined="120+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-5"
          title="Taman Wisata Gunung Bunder"
          subTitle="Mount Salak, Bogor"
          peopleJoined="90+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-6"
          title="Cikole Jayagiri Resort Camp"
          subTitle="Lembang, Bandung"
          peopleJoined="70+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-7"
          title="Bukit Asmara Situk Camp"
          subTitle="Kebumen, Central Java"
          peopleJoined="60+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-8"
          title="Bedengan Campground"
          subTitle="Malang, East Java"
          peopleJoined="110+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-9"
          title="Bukit Rhema Camp"
          subTitle="Magelang, Central Java"
          peopleJoined="75+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-10"
          title="Lembah Indah Malang Camp"
          subTitle="Malang, East Java"
          peopleJoined="95+ Joined"
        />
      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[743px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-[24px] font-[400] md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%] capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="Camp-2"
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
