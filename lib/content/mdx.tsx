import type { ComponentPropsWithoutRef, ComponentType } from "react";

export const Panel = ({ children, raised = false }: { children: React.ReactNode; raised?: boolean }) => (
  <section className={`${raised ? "surface-raised" : "surface"} rich-copy`}>{children}</section>
);

export const WarningPanel = ({ children }: { children: React.ReactNode }) => (
  <section
    className="cta-card rich-copy"
    style={{ borderColor: "rgba(251, 113, 133, 0.3)", background: "rgba(251, 113, 133, 0.05)" }}
  >
    {children}
  </section>
);

export const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="section-grid section-grid--cards">{children}</div>
);

export const Card = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <article className="card-panel rich-copy">
    {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
    {children}
  </article>
);

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="glow mdx-heading-1" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="glow mdx-heading-2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="mdx-paragraph" {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="mdx-list" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="mdx-list" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="mdx-strong" {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => <code {...props} />,
  Panel,
  WarningPanel,
  Grid,
  Card,
};

export type MdxComponents = typeof mdxComponents;
export interface MdxContentProps {
  components?: Partial<MdxComponents>;
}

export type MdxContentComponent = ComponentType<MdxContentProps>;
