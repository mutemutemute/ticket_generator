import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { post } from "../helpers/post";
import { useNavigate } from "react-router";
import TicketContext from "../../context/TicketContext";
import Logo from "../assets/logo.svg";
import Background from "../assets/background.png";
import Line from "../assets/line.svg";
import Line2 from "../assets/line2.svg";

const AddTicketForm = () => {
  const { setTicket, error, setError } = useContext(TicketContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await post(data);

      const ticket = response.data;
      setTicket(ticket);
      reset();
      setError("");
      navigate("/ticket");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
    <div
      className="flex flex-col items-center h-screen text-center bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${Background})` }}
    >
      <img src={Line2} alt="" className="absolute top-0 right-0"/>
      <div className="w-full max-w-md p-6 absolute z-20">
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="" className="pt-6"/>

          <h1 className="text-3xl font-bold mt-2 text-white pt-10 ">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-8 pt-3  "
        >
          <section>
            <input
             
              {...register("full_name", {
                required: "Full name is required",
                maxLength: { value: 100, message: "Max 100 characters" },
              })}
              type="text"
              placeholder="Full name"
              className="border border-white w-full placeholder:text-white rounded-md p-2 text-white"
              onInput={() => setError("")}
            />
            <p className="text-peach text-sm">{errors.full_name?.message}</p>
          </section>

          <section>
            <input
             
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[\w]([\w]+[\.\-]*)+[\w]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
                maxLength: { value: 255, message: "Max 255 characters" },
              })}
              type="text"
              placeholder="Email"
              className="border border-white placeholder:text-white rounded-md p-2 w-full text-white"
              onInput={() => setError("")}
            />
            <p className="text-peach text-sm">{errors.email?.message}</p>
          </section>

          <section>
            <input
             
              {...register("github_username", {
                required: "GitHub username is required",
                pattern: {
                  value: /^@[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,98}$/,
                  message: "Invalid GitHub username",
                },
                maxLength: { value: 100, message: "Max 100 characters" },
              })}
              type="text"
              placeholder="GitHub username"
              className="border border-white w-full placeholder:text-white rounded-md p-2 text-white"
            />
            <p className="text-peach text-sm">
              {errors.github_username?.message}
            </p>
          </section>

          <button
            className="p-2 rounded-md w-full bg-peach"
            type="submit"
          >
            Generate My Ticket
          </button>
          {error && <p className="text-peach text-sm">{error}</p>}
        </form>
        </div>
      </div>
      <img src={Line} alt="" className="absolute bottom-0 left-0 z-10"/>
    
     
              </>
  );
};

export default AddTicketForm;
