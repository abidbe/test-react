import "./App.css";
import { GlobalContext } from "./contexts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    name: "Abid",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
