import { NAV_BAR } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}></Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_BAR.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16  flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
