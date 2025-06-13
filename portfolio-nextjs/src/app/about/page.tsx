import Headline from "../components/typo/Headline.typo.components";
import Paragraph from "../components/typo/Paragraph.typo.components";

type AboutProps = {
  href: string;
  children: React.ReactNode;
};

export default function Page({ children }: AboutProps) {
  return (
    <>
      <div className="mx-4 mt-5 w-full bg-red-200">
        <Paragraph className="font-outfit text-center">About</Paragraph>
        {children}
      </div>
    </>
  );
}
