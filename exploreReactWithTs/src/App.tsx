import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { AuthProvider } from "./providers/AuthProvider";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </>
  );
};

export default App;
