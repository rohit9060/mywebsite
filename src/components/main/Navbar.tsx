import { Link } from "@/i18n/routing";
import { IconType } from "react-icons";
import { ImBlog } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { SiCodeproject } from "react-icons/si";
import { LangSwitch } from "./LangSwitch";

export function Navbar() {
  const links = [
    {
      title: "Home",
      href: "/",
      Icon: MdHome,
    },
    {
      title: "Projects",
      href: "/projects",
      Icon: SiCodeproject,
    },
    {
      title: "Blogs",
      href: "/blogs",
      Icon: ImBlog,
    },
  ];

  return (
    <>
      <nav className="sticky top-0 bg-white/10 shadow-lg backdrop-blur p-2 md:rounded-full md:w-1/2 lg:w-1/3 mx-auto">
        <div className="flex items-center justify-center gap-5 text-base font-medium">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              title={link.title}
              Icon={link.Icon}
            />
          ))}
          <LangSwitch />
        </div>
      </nav>
    </>
  );
}

function NavLink({
  href,
  title,
  Icon,
}: {
  href: string;
  title: string;
  Icon: IconType;
}) {
  return (
    <Link href={href} title={title} className="animate-fadeInUp">
      <Icon size="1.5rem" />
    </Link>
  );
}
