import { BrowserRouter, Route, Routes } from "react-router";
import loader from "./assets/images/spinner/Eclipse@1x-1.0s-200px-200px.svg";
import { lazy, Suspense } from "react";
import AppProviders from "./utils/AppProvider";
import Settings from "./pages/Settings";



function App() {
  const Login = lazy(() => import("./pages/Login"));
  const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
  const Items =lazy(()=>import("./pages/Items"));
  const Category = lazy(()=>import("./pages/Category"));
  const Uom = lazy(()=>import("./pages/Uom"));
  const Users = lazy(()=>import("./pages/Users"));
  const Vehicles = lazy(()=>import("./pages/Vehicles"))


  return (
    <>
      <BrowserRouter>
        <AppProviders>
          <Suspense
            fallback={
              <div className="text-center w-full h-screen bg-bgPrimary flex items-center justify-center ">
                <img
                  src={loader}
                  alt="loading animation"
                  className="w-20 h-20"
                />
              </div>
            }
          >
            <Routes>
              {/* login page */}
              <Route path="/" element={<Login />} />

              {/* admin routes */}
              
              <Route path="admin" element={<DashboardLayout />}>
                <Route index element={<Items />} />
                <Route path="category" element={<Category />} />
                <Route path="uom" element={<Uom />} />
                <Route path="users" element={<Users />} />
                <Route path="Vehicles" element={<Vehicles />} />
                <Route path="settings" element={<Settings/>} />
              </Route>
            </Routes>
          </Suspense>
        </AppProviders>
      </BrowserRouter>
    </>
  );
}

export default App;
