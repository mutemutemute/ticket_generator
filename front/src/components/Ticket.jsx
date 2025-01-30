import { RiDiscFill } from "react-icons/ri";
import React, { useContext } from "react";
import TicketContext from "../../context/TicketContext";
import { useNavigate } from "react-router";
import Background from "../assets/background.png";
import TicketPattern from "../assets/patternticket.svg";
import Logo from "../assets/logo.svg";
import Github from "../assets/icon-github.svg";
import Line from "../assets/line.svg";
import Line2 from "../assets/line2.svg";

const Ticket = () => {
  const { ticket } = useContext(TicketContext);
  const navigate = useNavigate();

  if (!ticket) {
    return <p>No ticket found. Please submit a ticket first.</p>;
  }

  return (
    <>
      <div
        className="h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img src={Line2} className="absolute top-0 right-0" alt="" />
        <img src={Line} className="absolute bottom-0 left-0" alt="" />
        <img src={Logo} alt="" className="absolute top-9 w-40" />
        <p className="text-white text-4xl absolute top-25 text-center">
          Congrats, <span className="text-peach">{ticket.full_name}</span>!
        </p>
        <p className="text-white text-4xl absolute top-37 text-center">
          Your ticket is ready.
        </p>
        <div className="w-80 text-center px-4">
          <p className="text-white font-sans pt-30 pb-10">
            We've emailed your ticket to 
            <span className="text-peach"> {ticket.email}</span> and will send
            updates in the run-up to the event.
          </p>
        </div>
        
        
        <div className="relative max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
          <img src={TicketPattern} alt="" className="w-full h-auto" />
          <div className="absolute top-6 left-2 flex flex-col items-center justify-center text-center px-4">
            <img src={Logo} alt="" className="w-50 md:w-70" />

            <p className="text-white tracking-wide font-sans text-sm">
              Jan 31, 2025 / Austin, TX
            </p>

            <p className="text-white text-lg md:text-2xl pt-7 md:pt-9 lg:pt-15">{ticket.full_name}</p>
            
            <div className="flex items-center justify-center mt-2">
              <img src={Github} alt="" className="w-6 h-6" />
              <p className="text-white tracking-wide font-sans text-sm  ml-2">
                {ticket.github_username}
              </p>
            </div>

            <p className="text-white text-xl md:text-2xl transform rotate-90 absolute left-78 md:left-90 lg:left-106 ">
              {ticket.ticket_id}
            </p>
          </div>
        </div>

        
        <button
          onClick={() => navigate("/")}
          className="pt-2 w-40 bg-peach p-2 rounded-md absolute bottom-1/20"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Ticket;
