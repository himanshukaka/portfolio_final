export type NotePage = {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  summary: string;
  route: `/${string}`;
};

export const notePages: NotePage[] = [
  {
    slug: "recruiters-live-in-excel",
    title: "Recruiters Live in Excel",
    eyebrow: "Excel as the real workflow",
    lede:
      "A note on why recruiters keep returning to spreadsheets even after buying specialized software.",
    summary:
      "Excel is not the competitor. It is evidence of information density and speed.",
    route: "/recruiters_live_in_excel",
  },
  {
    slug: "bilaspur-diaries",
    title: "Bilaspur Diaries",
    eyebrow: "Compliance, not perfection",
    lede:
      "A field visit that turned into a product lesson about compliance, improvisation, and the friction hidden inside onboarding.",
    summary:
      "The compliant path only works when it is faster than the workaround.",
    route: "/bilaspur_diaries",
  },
  {
    slug: "cafes-human-behaviour",
    title: "Cafes & Human Behaviour",
    eyebrow: "Same product, different need",
    lede:
      "A sociology-style note on how one café can serve comfort in one city and privacy in another.",
    summary:
      "Segmentation is not just age or income. It is the job a space is hired to do.",
    route: "/cafes_human_behaviour",
  },
  {
    slug: "bulk-paste-filtering",
    title: "The Feature Nobody Planned To Love",
    eyebrow: "Bulk paste filtering",
    lede:
      "How a tiny shortcut became the signature experience because it removed the most annoying part of the job.",
    summary:
      "The smallest friction removal can become the thing people use every day.",
    route: "/bulk_paste_filtering",
  },
];
