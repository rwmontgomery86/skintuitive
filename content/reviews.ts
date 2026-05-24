export type Review = {
  quote: string;
  name: string;
  context: string;
  featured?: boolean;
};

export const reviews: Review[] = [
  {
    featured: true,
    quote:
      "Marley walked me through every ingredient and every step. After a botched procedure at another clinic, she got me back on track — careful, methodical, and you can tell she actually thinks about what your skin needs.",
    name: "Meagan B.",
    context: "Patient since 2022",
  },
  {
    quote:
      "Best customized anti-aging plan I've ever had. The technology is real, the follow-up products are real, and the results show.",
    name: "Lorri B.",
    context: "May 2023",
  },
  {
    quote:
      "My skin has never been more hydrated. The aftercare protocol was the part nobody had explained to me before.",
    name: "Cindy J.",
    context: "May 2023",
  },
  {
    quote:
      "Highly accommodating and informative after procedures. Worth following — you'll see why.",
    name: "Nicole J.",
    context: "Jan 2021",
  },
];

export const reviewScore = {
  rating: 4.9,
  count: 120,
  label: "120+ verified Google reviews",
};
