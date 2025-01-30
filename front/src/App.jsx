import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Ticket from "./components/Ticket";
import AddTicketForm from "./components/AddTicketForm";
import NotFound from "./components/NotFound";
import TicketContextProvider from "../context/TicketContextProvider";

function App() {
  return (
    <TicketContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTicketForm />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TicketContextProvider>
  );
}

export default App;
