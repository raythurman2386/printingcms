import { useState } from "react";
import { client } from "../utils";
import { MotionWrapper } from "../wrapper";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Handle Submission to Sanity
    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setTimeout(() => {
          setFormData({ email: "", name: "", message: "" });
          setIsSubmitted(true);
          setIsLoading(false);
        }, 1500);
      })
      .catch((err) => setIsSubmitted(false));
  };

  return (
    <div
      id="contact"
      className="hero min-h-screen bg-neutral-content flex flex-col justify-center text-center py-20"
    >
      <div className="flex flex-col px-4 w-8/12 text-base-200">
        <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg">
          There are a variety materials that can be printed depending on the
          strength needed for your item. Contact us today to discuss material
          selection!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="pt-8 lg:w-6/12">
        <div className="form-control py-4">
          <label htmlFor="email" className="input-group">
            <span>Email</span>
            <input
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="input input-bordered input-lg w-full"
            />
          </label>
        </div>
        <div className="form-control py-4">
          <label htmlFor="name" className="input-group">
            <span>Name</span>
            <input
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="input input-bordered input-lg w-full"
            />
          </label>
        </div>
        <div className="form-control py-4">
          <label htmlFor="message" className="input-group">
            <span>Message</span>
            <textarea
              id="message"
              required
              className="textarea w-full"
              placeholder="What can we quote for you today?"
              value={formData.message}
              name="message"
              onChange={handleChange}
              rows={5}
            />
          </label>
        </div>
        <div className="form-control py-4">
          <button
            type="submit"
            className={`btn btn-primary btn-block transition ${
              isLoading && "loading"
            }`}
          >
            {!isLoading ? "Submit" : "Loading"}
          </button>
          {isSubmitted && (
            <div>"Thank you! We will reach out as soon as possible!"</div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MotionWrapper(Contact);
