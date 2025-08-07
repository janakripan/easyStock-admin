import { BrowserRouter, Route, Routes } from "react-router";
import loader from "./assets/images/spinner/Eclipse@1x-1.0s-200px-200px.svg";
import { lazy, Suspense } from "react";
import AppProviders from "./utils/AppProvider";


function App() {
  const Login = lazy(() => import("./pages/Login"));
  const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
  const Items = lazy(() => import("./pages/Items"));
  const Category = lazy(() => import("./pages/Category"));
  const Uom = lazy(() => import("./pages/Uom"));
  const Users = lazy(() => import("./pages/Users"));
  const Vehicles = lazy(() => import("./pages/Vehicles"));
  const EditItemsPage = lazy(() => import("./components/items/EditItemsPage"));
  const AddItemsPage = lazy(() => import("./components/items/AddItemsPage"));
  const AddCategoriesPage = lazy(() => import("./components/categories/AddCategoriesPage"));
  const EditCategoriesPage = lazy(() => import("./components/categories/EditCategoriesPage"));
  const Settings = lazy(() => import("./pages/Settings"));
  const AddUomPage = lazy(() => import("./components/uom/AddUomPage"));
  const EditUomPage = lazy(() => import("./components/uom/EditUomPage"));
  const EditUsersPage = lazy(() => import("./components/categories/EditCategoriesPage"));
  const AddUsersPage = lazy(() => import("./components/users/AddUsersPage"));
  const EditVehiclesPage = lazy(() => import("./components/vehicles/EditVehiclesPage"));
  const AddVehiclesPage = lazy(() => import("./components/vehicles/AddVehiclesPage"));
  

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
                <Route path="items/create" element={<AddItemsPage />} />
                <Route path="items/edit/:editId" element={<EditItemsPage />} />

                <Route path="category" element={<Category />} />
                <Route path="category/create" element={<AddCategoriesPage/>} />
                <Route path="category/edit/:editId" element={<EditCategoriesPage/>} />

                <Route path="uom" element={<Uom />} />
                <Route path="uom/create" element={<AddUomPage/>}/>
                <Route path="uom/edit/:editId" element={<EditUomPage/>} />

                <Route path="users" element={<Users />} />
                <Route path="users/create" element={<AddUsersPage/>} />
                <Route path="users/edit/:editId" element={<EditUsersPage/>} />

                <Route path="Vehicles" element={<Vehicles />} />
                <Route path="vehicles/create" element={ <AddVehiclesPage/>} />
                <Route path="vehicles/edit/:editId" element={ <EditVehiclesPage/>} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </AppProviders>
      </BrowserRouter>
    </>
  );
}

export default App;
