import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layoutes/Layout";

// Lazy imports
const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() =>
  import("../pages/modules/dashboard/DashBoard")
);

const PublicRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/service/user_manage" element={<Layout />}>
           
          </Route>
        </Route>

      </Routes>
    </Suspense>
  );
};

export default PublicRoute;
