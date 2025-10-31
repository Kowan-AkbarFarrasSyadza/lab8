import {
  GithubIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Square Area Calculator",
    href: "/square-area",
  },
  {
    title: "Circle Area Calculator",
    href: "/circle-area",
  },
  {
    title: "Cube Surface Area Calculator",
    href: "/cube-surface",
  },
  {
    title: "Cylinder Lateral Surface Area Calculator",
    href: "/cylinder-lateral-surface",
  },
];

const Footer = () => {
  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        {/* <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div>
            <svg
              id="logo-7"
              width="180"
              height="32"
              viewBox="0 0 180 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                transform="translate(0, 5) scale(0.04)"
                className="fill-current"
              >
                <path d="m51.4,426.9v-371.8h356.7l-356.7,371.8h2.13163e-14zm422.3-399.8c-3.2-7.4-10.4-12.2-18.5-12.2h-423.9c-11.1,0-20.1,9-20.1,20.1v441.9c0,8.2 5.1,15.2 12.6,18.6 9.2,4.2 18.1-0.7 22-4.7l423.9-441.9c5.6-5.8 7.1-14.4 4-21.8z" />
                <path d="m125.9,132.8h97.8l-97.8,102v-102h1.42109e-14zm-27.6,170.5c9.4,3.8 18.1-0.7 22-4.7l165-172c5.6-5.8 7.1-14.4 4-21.8-3.2-7.4-10.4-12.2-18.5-12.2h-165c-11.1,0-20.1,9-20.1,20.1v172c-1.42109e-14,8.2 5,15.5 12.6,18.6z" />
                <path d="m295.4,408.8l-35.1-35.1 157.3-157.3 35.1,35.1-157.3,157.3zm-67.4,32.3l11.7-31.2 19.5,19.5-31.2,11.7zm267.3-203.7l-63.5-63.5c-7.8-7.8-20.6-7.8-28.4,0l-185.7,185.6c-2,2-3.6,4.5-4.6,7.1l-38.3,101.8c-2.8,7.4-1,15.7 4.6,21.3 3.8,3.8 11.5,7.2 21.3,4.6l101.8-38.3c2.6-1 5-2.5 7.1-4.6l185.7-185.7c6.2-6.1 8.4-20 0-28.3z" />
              </g>

              <text
                x="28"
                y="21"
                fontFamily="sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="currentColor"
              >
                AreaCalculator
              </text>
            </svg>

            <ul className="mt-6 space-y-2">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xs w-full">
            <h6 className="font-semibold">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator /> */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground text-center sm:text-start">
            &copy;
            Akbar, Farras, Syadza.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
