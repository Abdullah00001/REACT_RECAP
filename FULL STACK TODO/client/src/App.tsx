import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Router";
import { HelmetProvider } from "react-helmet-async";
import { TodoProvider } from "./providers/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </TodoProvider>
  );
}

export default App;
