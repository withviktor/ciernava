export type Route = {
  displayName: string;
  path: string;
  disabled?: boolean;
};

const routes: Record<string, Route> = {
  products: {
    displayName: "Products",
    path: "/products",
    disabled: true,
  },
  blog: {
    displayName: "Blog",
    path: "/blog",
  },
};

export default routes;
