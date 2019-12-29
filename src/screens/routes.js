import React from "react";
import MainHome from "./Home/Main";
import SelectExam from "./Exam/Select";
import StartExam from "./Exam/StartExam";
import LearnLesson from "./Learn/MainLearn";
import NotFound from "./404/Main";


const routes = [
    {
        path: "/",
        exact: true,
        main: () => <MainHome />
    },
    {
        path: "/exam",
        exact: true,
        main: () => <SelectExam />
    },
    {
        path: "/exam/start",
        exact: false,
        main: () => <StartExam />
    },
    {
        path: "/learn",
        exact: false,
        main: (match) => <LearnLesson match={match} />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;