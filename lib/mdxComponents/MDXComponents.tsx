import { getMDXComponent, MDXContentProps } from "mdx-bundler/client";
import { useMemo } from "react";
import MDXCounter from "./MDXCounter";
import Step from "./mdxUseEffect";

export const MDXComponent = ({ code }: { code: string }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <MDXComponentBase Component={Component} />;
};

export const MDXComponentBase = ({
  Component,
}: {
  Component: React.FunctionComponent<MDXContentProps>;
}) => (
  <Component
    components={{
      Counter: MDXCounter,
      Step: Step,
    }}
  />
);
