import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
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

// Individual product page imports
// Import all product detail pages from the products folder
import Nalyst from "@/pages/products/Nalyst";
import Newshunt from "@/pages/products/Newshunt";
import Asaad from "@/pages/products/Asaad";
import Khella from "@/pages/products/Khella";
import Forecast from "@/pages/products/Forecast";
import Hr360 from "@/pages/products/Hr";

function Router() {
  return (
    <Switch>
      {/* Main Navigation Routes */}
      <Route path="/" component={Home} />                    {/* Homepage with hero, services, products overview */}
      <Route path="/about" component={About} />              {/* About us - company information */}
      <Route path="/services" component={Services} />        {/* Services page - AI, Cybersecurity, Digital Transformation */}
      
      {/* Individual Product Detail Pages */}
      {/* CRITICAL: These specific routes MUST come BEFORE the general /products route */}
      {/* Wouter matches routes in order - if /products comes first, these will never be reached */}
      <Route path="/products/nalyst" component={Nalyst} />         {/* Nalyst - AI analytics platform */}
      <Route path="/products/newshunt" component={Newshunt} />     {/* Newshunt - news aggregation solution */}
      <Route path="/products/asaad" component={Asaad} />           {/* Asaad - product details */}
      <Route path="/products/khella" component={Khella} />         {/* Khella - product details */}
      <Route path="/products/4kast" component={Forecast} />        {/* 4kast - forecasting and analytics */}
      <Route path="/products/hr360" component={Hr360} />           {/* HR360 - HR management system */}
      
      {/* Main Products Page - Shows grid of all products */}
      <Route path="/products" component={Products} />        {/* Products listing page */}
      
      {/* Other Main Pages */}
      <Route path="/industries" component={Industries} />    {/* Industries we serve */}
      <Route path="/contact" component={Contact} />          {/* Contact form page */}
      
      {/* Error Handling */}
      <Route path="/404" component={NotFound} />             {/* Explicit 404 error page */}
      <Route component={NotFound} />                         {/* Catch-all route for undefined paths */}
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {/* Theme Provider - Manages dark/light mode theme switching */}
      <ThemeProvider defaultTheme="dark">
        {/* Language Provider - Manages English/Arabic language switching and RTL/LTR direction */}
        <LanguageProvider>
          {/* Tooltip Provider - Enables tooltip functionality across the application */}
          <TooltipProvider>
            {/* Toast Notifications - Configuration for toast messages */}
            <Toaster 
              position="top-center"
              toastOptions={{
                style: {
                  background: '#0A1628',
                  border: '1px solid rgba(0, 212, 170, 0.3)',
                  color: '#fff',
                },
              }}
            />
            {/* Main application router - handles all navigation */}
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;