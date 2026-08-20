import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// Temporary placeholder for missing pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center text-center">
    <div>
      <h1 className="text-4xl font-display font-bold text-dark-text mb-4">{title}</h1>
      <p className="text-slate-400">The page you're looking for doesn't exist.</p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServiceDetail /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:id", element: <PortfolioDetail /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogPost /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy-policy", element: <Legal title="Privacy Policy" /> },
      { path: "terms", element: <Legal title="Terms & Conditions" /> },
      { path: "*", element: <Placeholder title="404 - Page Not Found" /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
