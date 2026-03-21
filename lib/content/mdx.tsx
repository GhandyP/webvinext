import type { ComponentPropsWithoutRef, ComponentType } from "react";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="glow" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.08 }} {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="glow" style={{ fontSize: "1.35rem", lineHeight: 1.18 }} {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="muted" style={{ maxWidth: "68ch" }} {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul style={{ display: "grid", gap: "0.5rem", paddingInlineStart: "1.2rem" }} {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol style={{ display: "grid", gap: "0.5rem", paddingInlineStart: "1.2rem" }} {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong style={{ color: "var(--color-text)" }} {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => <code {...props} />,
};

export type MdxComponents = typeof mdxComponents;
export interface MdxContentProps {
  components?: Partial<MdxComponents>;
}

export type MdxContentComponent = ComponentType<MdxContentProps>;
