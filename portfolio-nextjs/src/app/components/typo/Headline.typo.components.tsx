import React, { JSX } from "react";

type ParagraphProps = {
  centered?: boolean;
  bold?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export default function Headline({
  centered,
  bold,
  italic,
  uppercase,
  children,
  className
}: ParagraphProps) {
  const sizeClass = `text-2xl md:text-4xl xl:text-8xl`;
  return (
    <h1
      className={`${sizeClass} ${centered ? "text-center" : ""} ${
        bold ? "font-bold" : ""
      } ${italic ? "italic" : ""} ${uppercase ? "uppercase" : ""} ${className}`}
    >
      {children}
    </h1>
  );
}
