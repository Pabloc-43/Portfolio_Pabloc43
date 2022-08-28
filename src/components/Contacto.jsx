import React from 'react'

export default function Contacto() {
  return (
    <section className="container mb-5">
  <h3 className="formuu formmm" id="Contacto">
    Contacto por mail:
  </h3>
  <div className="d-flex justify-content-center">
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal10"
      data-bs-whatever="@mdo"
    >
      Formulario de contacto
    </button>
  </div>
  <div
    className="modal fade"
    id="exampleModal10"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel10"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen-sm-down">
      <div className="modal-content">
        <div className="modal-header my-1">
          <h5 className="modal-title" id="exampleModalLabel10">
            New message
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="container">
          <form
            target="_blank"
            action="https://formsubmit.co/pablonicolascrodriguez@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col mt-3 mb-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div className="col mb-2">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows={10}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
