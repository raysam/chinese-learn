import React from "react";
import MainHome from "./Home/Main";
import SelectExam from "./Exam/Select";
import NotFound from "./404/Main";


const routes = [
    {
        path: "/",
        exact: true,
        main: () => <MainHome />
    },
    {
        path: "/exam",
        exact: false,
        main: () => <SelectExam />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;