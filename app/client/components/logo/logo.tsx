import { Link } from "@remix-run/react";


const variants = {
  white: "/assets/images/logo-dioni-mara-yoga-terapias-white.png",
  sky: "/assets/images/logo-dioni-mara-yoga-terapias-sky-seicento.png",
}

interface LogoProps {
  variant: keyof typeof variants
}

export default function Logo({ variant }: LogoProps) {
  return (
    <Link to="/">
      <img
        className="w-48 md:w-64"
        src={variants[variant] || variants.sky}
        alt="Logo Dioni Mara Yoga e Terapias"
      />
    </Link>
  );
}
