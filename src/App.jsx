import './App.css';
import CareerSuccess from "./components/CareerSuccess";
import Landingpage from "./components/Landingpage";
// import ConsultationBanner from "./components/ConsultationBanner"; // <-- import
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-700 via-indigo-400 to-purple-800 flex flex-col overflow-auto">
      <Landingpage/>
      <CareerSuccess /> 
      <Footer />
    </div>
  );
}