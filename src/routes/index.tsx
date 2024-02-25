import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { RootLayout } from "@/components/Layout";

const SignIn = lazy(() => import("@/pages/SignIn"));
const Result = lazy(() => import("@/pages/Result"));
const Question = lazy(() => import("@/pages/Question"));
const PreQuestion = lazy(() => import("@/pages/PreQuestion"));

export const APPRouter = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <Navigate to="/app" replace />,
            },
            {
                path: "/app",
                element: <RootLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="question" replace />,
                    },
                    {
                        path: "pre-question",
                        element: <PreQuestion />,
                    },
                    {
                        path: "question",
                        element: <Question />,
                    },
                    {
                        path: "result",
                        element: <Result />,
                    },
                   
                ],
            },
            {
                path: "sign-in",
                element: <SignIn />,
            },
        ],
    },
]);