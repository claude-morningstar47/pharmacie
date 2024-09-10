import { Routes as Router, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./components/Home";
import MultiStepForm from "./components/steps/MultiStepForm";
import Avis from "./components/Avis";
import PharmacyPotentialTable from "./components/Potentiel";
import Simulation from "./components/Simulation";

type Props = {};

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  //   console.log("Status: ", authenticated);

  // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!authenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<MultiStepForm />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/potentiel" element={<PharmacyPotentialTable />} />
          <Route path="/simulation" element={<Simulation />} />
        </Route>
        {/* Redirection vers la page de connexion pour toutes les autres routes non définies */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Router>
    </>
  );
};

export default Routes;
