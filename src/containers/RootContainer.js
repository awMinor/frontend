import { createRoot } from "react-dom/client";

function RootContainer() {
  const container = document.getElementById("root");
  const root = createRoot(container);
  return root;
}

export default RootContainer;