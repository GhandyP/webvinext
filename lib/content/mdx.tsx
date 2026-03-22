import type { ComponentPropsWithoutRef, ComponentType } from "react";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="glow mdx-heading-1" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="glow mdx-heading-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="muted mdx-paragraph" {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="mdx-list" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="mdx-list" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="mdx-strong" {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => <code {...props} />,
};

export type MdxComponents = typeof mdxComponents;
export interface MdxContentProps {
  components?: Partial<MdxComponents>;
}

export type MdxContentComponent = ComponentType<MdxContentProps>;
