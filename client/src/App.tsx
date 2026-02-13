import { useEffect } from "react";
import { useLocation, Route, Switch } from "wouter";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// Main page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

// Product detail pages
import Nalyst from "@/pages/products/Nalyst";
import Newshunt from "@/pages/products/Newshunt";
import Asaad from "@/pages/products/Asaad";
import Khella from "@/pages/products/Khella";
import Forecast from "@/pages/products/Forecast";
import Hr360 from "@/pages/products/Hr";


// ✅ Scroll To Top Component
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


// ✅ Router Component
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />

      <Route path="/products/nalyst" component={Nalyst} />
      <Route path="/products/newshunt" component={Newshunt} />
      <Route path="/products/asaad" component={Asaad} />
      <Route path="/products/khella" component={Khella} />
      <Route path="/products/4kast" component={Forecast} />
      <Route path="/products/hr360" component={Hr360} />

      <Route path="/products" component={Products} />

      <Route path="/industries" component={Industries} />
      <Route path="/contact" component={Contact} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}


// ✅ Main App
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>

            {/* Fix scroll issue */}
            <ScrollToTop />

            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#0A1628",
                  border: "1px solid rgba(0, 212, 170, 0.3)",
                  color: "#fff",
                },
              }}
            />

            <Router />

          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
