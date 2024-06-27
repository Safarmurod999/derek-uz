import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import {Layout} from "../pages/index";
import { Spinner } from "../components";

const Home = lazy(() => import("../pages/Home/Home"));

export const routesArr = [
    {
        id: 0,
        path: "/",
        element: Home,
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