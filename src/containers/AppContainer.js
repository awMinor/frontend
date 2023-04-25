import { createRoot } from "react-dom/client";

function AppContainer() {
  const container = document.getElementById("App");
  const root = createRoot(container);
  return root;
}

export default AppContainer;