import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./components/AppSidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <App />
        </main>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
