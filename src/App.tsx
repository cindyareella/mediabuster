import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PaidMedia from "./pages/PaidMedia";
import SEOPage from "./pages/SEOPage";

import Contenido from "./pages/Contenido";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import Academia from "./pages/Academia";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import LandingWeb from "./pages/LandingWeb";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ConditionalWhatsApp = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/landing-web")) return null;
  return <FloatingWhatsApp />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/paid-media" element={<PaidMedia />} />
            <Route path="/seo" element={<SEOPage />} />
            
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/landing-web" element={<LandingWeb />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ConditionalWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
