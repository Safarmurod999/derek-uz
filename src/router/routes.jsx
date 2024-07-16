import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Catalog, Company, Home, Layout } from "../pages/index";
import { Spinner } from "../components";


export const routesArr = [
    {
        id: 0,
        path: "/",
        element: Home,
    },
    {
        id: 1,
        path: '/catalog',
        element: Catalog,
    },
    {
        id: 2,
        path: '/company',
        element: Company,
    },
];
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {
                    routesArr.map((route, index) => {
                        const RouteComponent = route.element;
                        return (
                            <Route key={index} index={!route.path && true} path={route.path}
                                element={
                                    <Suspense fallback={<Spinner position="full" />}>
                                        <RouteComponent />
                                    </Suspense>
                                } />
                        )
                    })
                }
            </Route>
        </Routes>
    )
}

export default Router