import NavElement from "../molecules/NavElement.molecules.components";

type NavBarProps = {
  hrefs: string[];
  childrens: React.ReactNode[];
  className?: string;
};

export default function NavBar({ hrefs, childrens, className }: NavBarProps) {
  return (
    <nav>
      <ul className="flex flex-row">
        {hrefs.map((href, index) => (
          <NavElement key={index} href={href}>
            {childrens[index]}
          </NavElement>
        ))}
      </ul>
    </nav>
  );
}
