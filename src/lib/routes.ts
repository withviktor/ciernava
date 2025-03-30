export type Route = {
  displayName: string;
  path: string;
  disabled?: boolean;
};

const routes: Record<string, Route> = {};

export default routes;
