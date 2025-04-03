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
        className="h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col relative px-4"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <img
          src={Line2}
          className="absolute top-0 right-0 w-24 sm:w-auto"
          alt="line2"
        />
        <img
          src={Line}
          className="absolute bottom-0 left-0 w-24 sm:w-auto"
          alt="line"
        />

        <img
          src={Logo}
          alt="Logo"
          className="absolute top-4 sm:top-9 w-50 sm:w-70"
        />

        <p className="text-white text-2xl sm:text-4xl md:mt-24 text-center z-10">
          Congrats, <span className="text-peach">{ticket.full_name}</span>!
        </p>
        <p className="text-white text-2xl sm:text-4xl mt-4 text-center z-10">
          Your ticket is ready.
        </p>

        <div className="max-w-md text-center mt-8 px-2 sm:px-4 z-10">
          <p className="text-white font-sans text-base sm:text-lg">
            We've emailed your ticket to
            <span className="text-peach"> {ticket.email}</span> and will send
            updates in the run-up to the event.
          </p>
        </div>

        <div className="relative max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-4 mb-4">
          <img src={TicketPattern} alt="" className="w-full h-auto" />
          <div className="absolute top-6 left-2 flex flex-col items-center justify-center text-center px-4 w-full pr-30">
            <img src={Logo} alt="" className="w-50 md:w-70" />

            <p className="text-white tracking-wide font-sans text-sm">
              Jan 31, 2025 / Austin, TX
            </p>

            <p className="text-white text-lg md:text-2xl pt-7 md:pt-9 lg:pt-15">
              {ticket.full_name}
            </p>

            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center justify-center">
                <img src={Github} alt="" className="w-6 h-6" />
                <p className="text-white tracking-wide font-sans text-sm ml-2">
                  {ticket.github_username}
                </p>
              </div>
            </div>

            <p
              className="absolute text-white text-xl md:text-2xl lg:text-3xl rotate-90"
              style={{
                top: "59%",
                left: "77%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {ticket.ticket_id}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="pt-2 w-40 bg-peach p-2 rounded-md mt-4 mb-4"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Ticket;
