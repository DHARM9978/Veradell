import React from "react";

const ContactUs = () => {
  const contactImage =
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-black min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-white">Contact Us</h1>

        <div className="row justify-content-center g-4">
          {" "}
          {/* Added g-4 for gap between cards */}
          {/* Image Card (left) */}
          <div className="col-lg-5 col-xl-5">
            <div className="card border-0 h-100">
              <img
                src={contactImage}
                alt="Contact Illustration"
                className="card-img h-100 object-fit-cover rounded-start"
              />
            </div>
          </div>
          {/* Form Card (right) */}
          <div className="col-lg-5 col-xl-5">
            <div
              className="card h-100 border-0 rounded-end"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <form
                onSubmit={handleSubmit}
                className="card-body d-flex flex-column p-4"
              >
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label text-white fw-bold d-block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-dark"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Contact Field */}
                <div className="mb-3">
                  <label className="form-label text-white fw-bold d-block mb-2">
                    Email ID / Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-dark"
                    placeholder="Enter your email or phone number"
                    required
                  />
                </div>

                {/* Query Field */}
                <div className="mb-3 flex-grow-1">
                  <label className="form-label text-white fw-bold d-block mb-2">
                    Query / Suggestion
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border-dark"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Write your message here (4-5 lines)"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-auto pt-3">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-bold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
