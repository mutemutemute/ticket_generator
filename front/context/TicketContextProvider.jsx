import { useState } from "react";
import TicketContext from "./TicketContext";

function TicketContextProvider({ children }) {
    const [ticket, setTicket] = useState([]);
    
    const [error, setError] = useState(null);

    return (
        <TicketContext.Provider value={{ ticket, setTicket,  error, setError }}>{children}</TicketContext.Provider>
    );
}

export default TicketContextProvider;