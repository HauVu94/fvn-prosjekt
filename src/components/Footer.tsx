import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1"></div>
        </div>

        <div className="border bg-gray-20" />
        <div className="flex flex-col gap-5">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <div
                key={link.label}
                className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p className="whitespace-nowrap">{link.label}:</p>
                <p className="medium-14 whitespace-nowrap text-blue-70">
                  {link.value}
                </p>
              </div>
            ))}
          </FooterColumn>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <FooterColumn title={SOCIALS.title}>
            <ul className="regular-14 flex gap-4 text-gray-30">
              {SOCIALS.links.map((link, index) => (
                <a key={index} href={link.url}>
                  <img
                    src={link.icon}
                    alt="Social Icon"
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </ul>
          </FooterColumn>
        </div>
        <p className="regular-14 w-full text-center text-gray-30">
          {`© ${new Date().getFullYear()}`} • Hau Duc Vu
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
