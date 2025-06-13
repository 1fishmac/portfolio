import Link from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function AppLink({ href, children }: LinkProps) {
  return <Link href={href}>{children}</Link>;
}
