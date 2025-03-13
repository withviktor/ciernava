export type Route = {
    displayName: string;
    path: string;
}

const routes: Record<string, Route> = {
    products: {
        displayName: "Products",
        path: "/products"
    },
    blog: {
        displayName: "Blog",
        path: "/blog"
    }
}

export default routes;