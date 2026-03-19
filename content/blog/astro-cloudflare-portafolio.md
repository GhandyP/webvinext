---
title: 'Building a Portfolio with Astro and Cloudflare Pages'
description: 'Why I chose Astro and Cloudflare Pages for my personal site and how the architecture works.'
pubDate: '2026-03-12'
---

When I decided to rebuild my personal portfolio, I wanted a stack that was fast, simple, and easy to maintain. After evaluating several options, I settled on Astro and Cloudflare Pages.

Astro's island architecture allows me to ship zero JavaScript by default, which is perfect for a content-heavy site like a blog. The developer experience is excellent, and the build times are incredibly fast.

Cloudflare Pages provides a seamless deployment experience. Every time I push to my repository, Cloudflare automatically builds and deploys the site to its global edge network. The integration was straightforward, and the performance benefits of serving static assets from the edge are undeniable.

In this post, I'll walk through the initial setup, the project structure, and some of the architectural decisions I made along the way.
