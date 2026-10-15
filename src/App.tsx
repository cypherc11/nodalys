import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Offers from './pages/Offers';
import OfferDetail from './pages/OfferDetail';
import Diagnostic from './pages/Diagnostic';
import AuditFlash from './pages/AuditFlash';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Report from './pages/Report';
import { Legal, Privacy, NotFound } from './pages/Misc';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="offres" element={<Offers />} />
        <Route path="offres/:slug" element={<OfferDetail />} />
        <Route path="diagnostic" element={<Diagnostic />} />
        <Route path="audit-flash" element={<AuditFlash />} />
        <Route path="a-propos" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="exemple-de-rapport" element={<Report />} />
        <Route path="mentions-legales" element={<Legal />} />
        <Route path="confidentialite" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
