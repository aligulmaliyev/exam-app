import { PropsWithChildren, FC } from "react";
import { Navigate } from "react-router-dom"

import { EXAM_KEY } from "@/constants";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
    const token = localStorage.getItem(EXAM_KEY)

    if (Boolean(token)) {
        return <Navigate to="/sign-in" replace />
    }
    return children

};

export default ProtectedRoute;