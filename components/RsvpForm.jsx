import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
export default function RsvpForm() {
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!attending) {
      toast("Please select whether you will attend.", {
        type: "warning",
      });
      return;
    }
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number, attending }),
    });

    if (response.ok) {
      toast("RSVP, Submitted thanks for confirming", {
        type: "success",
      });

      setName("");
      setEmail("");
      setNumber("");
      setAttending(false);
      setSubmitting(false);

      setTimeout(() => {
        router.push("home");
      }, 4000);
    } else {
      setSubmitting(false);
      toast("Ooops, Error submission please try again", {
        type: "error",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset className={"fieldset"}>
          <legend className={"legend"}>
            {" "}
            <p className="text-sm font-medium text-center text-white">
              We'd love to know if you’re coming
            </p>
          </legend>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
            required
          />

          {["yes", "no"].map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={`attend_${option}`}
                value={option}
                className={"customRadio"}
                checked={attending === option}
                onChange={() => setAttending(option)}
                required
              />
              <label htmlFor={`attend_${option}`} className={"radioLabel"}>
                <div className={"radioSquare"}></div>
                <p>
                  {option === "yes"
                    ? "Yes!, Wouldn't miss it"
                    : "Sorry, Can't make it!"}
                </p>
              </label>
            </div>
          ))}
          <button
            className={`relative block px-6 py-2 mx-auto my-5 text-sm font-semibold text-center text-black transition bg-white rounded-lg hover:bg-gray-300`}
            type="submit"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span>Sending RSVP</span>
                <span className="inline-block ml-2 w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              </>
            ) : (
              "Submit RSVP"
            )}
          </button>
        </fieldset>
      </form>
    </>
  );
}
