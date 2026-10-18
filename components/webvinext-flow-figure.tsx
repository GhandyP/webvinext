type WebVinextFlowFigureProps = {
  variant: "home" | "detail";
};

const captions = {
  home: "An explanatory view of my own site's content path—not a client result.",
  detail: "An explanatory architecture view based on this repository, not a client screenshot.",
} as const;

export function WebVinextFlowFigure({ variant }: WebVinextFlowFigureProps) {
  return (
    <figure className={`webvinext-flow webvinext-flow--${variant}`}>
      <img
        src="/images/webvinext-flow.svg"
        width={840}
        height={380}
        alt="MDX source becomes generated content modules, feeds the Vinext and React App Router, and runs on a Cloudflare Worker."
        loading="lazy"
        decoding="async"
      />
      <figcaption>{captions[variant]}</figcaption>
    </figure>
  );
}
