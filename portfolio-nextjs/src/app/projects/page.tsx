import Paragraph from "../components/typo/Paragraph.typo.components";

type AboutProps = {
  children: React.ReactNode;
};

export default function Page({ children }: AboutProps) {
  return (
    <>
      <div className="mt-5 w-full bg-green-800">
        <Paragraph className="font-outfit text-center">Projects</Paragraph>
        {children}
      </div>
    </>
  );
}
