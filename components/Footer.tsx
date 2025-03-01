import Image from "next/image";
import Link from "next/link";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={"/"} className="mb-10">
            <Image src={"/hilink-logo.svg"} alt="Logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link href={link.url} key={index}>
                      {link.name}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={link.value}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-gray-30">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, index) => (
                    <Link href={link.url} key={index}>
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          &copy; 2025 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
