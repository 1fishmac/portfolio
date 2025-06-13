import AppLink from "../atoms/Link.atoms.components";

type NavElementProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavElement({ href, children }: NavElementProps) {
  return (
    <li className="mx-2 my-1">
      <AppLink href={href}>{children}</AppLink>
    </li>
  );
}
