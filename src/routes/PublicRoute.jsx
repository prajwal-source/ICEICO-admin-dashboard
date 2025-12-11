import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";


// Lazy imports
const Login = lazy(() => import("../pages/auth/Login"));
const UserManagement = lazy(() => import("../pages/modules/services/users-management/UserManagement"));
const ExchangeRate=lazy(()=>import("../pages/modules/services/exchange-rate/ExchangeRate"));
const ALAReport=lazy(()=>import("../pages/modules/services/ALA Report/ALAReport"));
const EmailTemplate=lazy(()=>import("../pages/modules/services/email-templates/EmailTemplate"));
const Promotions=lazy(()=>import("../pages/modules/services/promotions/Promotions"));


const PublicRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>

          {/* LAYOUT WRAPPER */}
          <Route element={<DashboardLayout />}>

              {/* PAGES INSIDE DASHBOARD */}
              <Route path="/service/user_manage" element={<UserManagement />} />
              <Route path="/service/exchange-rates" element={<ExchangeRate/>}/>
              <Route path="/service/active_accounts_report" element={<ALAReport/>}/>
              <Route path="/service/email_templates" element={<EmailTemplate/>}/>
              <Route path="/service/promotions" element={<Promotions/>}/>
          </Route>

        </Route>

      </Routes>

    </Suspense>
  );
};

export default PublicRoute;
