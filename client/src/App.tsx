import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Nalyst from "@/pages/products/nalyst";
import FourKast from "@/pages/products/4kast";
import Khella from "@/pages/products/khella";
import HR360 from "@/pages/products/hr360";
import Asaad from "@/pages/products/asaad";
import Newshunt from "@/pages/products/newshunt";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      
      
      <Route path="/products/nalyst" component={Nalyst} />
      <Route path="/products/4kast" component={FourKast} />
      <Route path="/products/khella" component={Khella} />
      <Route path="/products/hr360" component={HR360} />
      <Route path="/products/asaad" component={Asaad} />
      <Route path="/products/newshunt" component={Newshunt} />
      
      
      <Route path="/products" component={Products} />
      
      <Route path="/industries" component={Industries} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
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
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;