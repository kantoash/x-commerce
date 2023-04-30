export const SidebarOptionMotion = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const SideBarMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const categories = [
  {
    label: "tech gadgets",
  },
  {
    label: "home appliances",
  },
  {
    label: "clothes",
  },
  {
    label: "beauty Products",
  },
  {
    label: "sports",
  },
  {
    label: "health",
  },
  {
    label: "toys",
  },
  {
    label: "books",
  },
];

export const prices = [
  { label: "100000" },
  { label: "50000" },
  { label: "10000" },
  { label: "5000" },
  {
    label: "1000",
  },
];
