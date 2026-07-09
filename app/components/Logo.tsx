import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="shrink-0" aria-label="Halo & Pine home">
      <Image
        src="/logo.PNG"
        alt="Halo & Pine"
        width={220}
        height={60}
        priority
        className={className ?? "h-10 w-auto object-contain"}
      />
    </Link>
  );
}