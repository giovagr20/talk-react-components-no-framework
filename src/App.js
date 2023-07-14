import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioEnglish } from "./pages/english/PortfolioEnglishPage";
import { PortfolioSpanish } from "./pages/spanish/PortfolioSpanishPage";
import { ErrorNotFound } from "./pages/error/Error";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioEnglish />} />
        <Route path="/english" element={<PortfolioEnglish />} />
        <Route path="/spanish" element={<PortfolioSpanish />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
