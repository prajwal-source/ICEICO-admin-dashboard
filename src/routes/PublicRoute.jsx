import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";


// Lazy imports
const Login = lazy(() => import("../pages/auth/Login"));

// Service Routes
const UserManagement = lazy(() => import("../pages/modules/services/users-management/UserManagement"));
const CreateUser=lazy(()=> import('../pages/modules/services/users-management/CreateUser'))
const ExchangeRate=lazy(()=>import("../pages/modules/services/exchange-rate/ExchangeRate"));
const ALAReport=lazy(()=>import("../pages/modules/services/ALA Report/ALAReport"));
const EmailTemplate=lazy(()=>import("../pages/modules/services/email-templates/EmailTemplate"));
const Promotions=lazy(()=>import("../pages/modules/services/promotions/Promotions"));


// Setting Routes
const Documents=lazy(()=>import('../pages/modules/setting/documents/Documents'))
const CreateDocuments=lazy(()=>import('../pages/modules/setting/documents/CreateDocument'))
const AdminsRoom=lazy(()=>import('../pages/modules/setting/admins-room/AdminsRoom'))
const PaymentSystem=lazy(()=>import('../pages/modules/setting/payment-system/PaymentSystem'))
const Servers=lazy(()=>import('../pages/modules/setting/servers/Servers'))
const AccountType=lazy(()=>import('../pages/modules/setting/acount-type/AccountType'))
const Language=lazy(()=>import('../pages/modules/setting/language/Language'))
const PaymentMethods=lazy(()=>import('../pages/modules/setting/payment-methods/PaymentMethods'))
const LoginConfirmation=lazy(()=>import('../pages/modules/setting/login-confirmation/LoginConfirmation'))
const Codes=lazy(()=>import('../pages/modules/setting/login-confirmation/Codes'))

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
              {/* Service Module */}
              <Route path="/service/user_manage" element={<UserManagement />} />
              <Route path="/service/users_create" element={<CreateUser/>}/>
              <Route path="/service/exchange-rates" element={<ExchangeRate/>}/>
              <Route path="/service/active_accounts_report" element={<ALAReport/>}/>
              <Route path="/service/email_templates" element={<EmailTemplate/>}/>
              <Route path="/service/promotions" element={<Promotions/>}/>

              {/* Setting Module */}

              <Route path="/settings/documents_manage" element={<Documents/>}/>
              <Route path="/settings/document_create" element={<CreateDocuments/>}/>
              <Route path="/settings/settings" element={<AdminsRoom/>}/>
              <Route path="/settings/merchants_manage" element={<PaymentSystem/>}/>
              <Route path="/settings/servers_manage" element={<Servers/>}/>
              <Route path="/settings/types" element={<AccountType/>}/>
              <Route path="/settings/languages_manage" element={<Language/>}/>
              <Route path="/settings/payment_methods" element={<PaymentMethods/>}/>
              <Route path="/settings/authentication_settings" element={<LoginConfirmation/>}/>
              <Route path="/settings/authentication_settings/codes" element={<Codes/>}/>
          </Route>

        </Route>

      </Routes>

    </Suspense>
  );
};

export default PublicRoute;
