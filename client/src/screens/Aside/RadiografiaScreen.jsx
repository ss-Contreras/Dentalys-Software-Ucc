import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DienteModal from "../../components/DienteModal";

const Radiografia = () => {
  const [dienteModalIsActive, setDienteModalIsActive] = useState(false);

  const onSubmit = (data) => {};

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="row min-vh-100">
      <div className="col-lg-12 mx-auto">
        <div className="multisteps-form__panel border-radius-xl bg-white js-active p-4 position-relative">
          <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mt-3 mb-0 mb-2 ms-3 fw-light text-terciary">
              Radiografia
            </h3>
            Radiografia
            <button
              className="btn-min-width border rounded-pill mt-3 px-3 btn bg-secondary"
              title="Send"
              form="configForm"
              onClick={() => setDienteModalIsActive(true)}
            >
              Insertar radiografia
            </button>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card with stretched links</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="card-text">
                  <a
                    href="#"
                    class="stretched-link text-danger"
                  >
                    Stretched link will not work here, because{" "}
                    <code>position: relative</code> is added to the link
                  </a>
                </p>
                <p class="card-text bg-light">
                  This{" "}
                  <a href="#" class="text-warning stretched-link">
                    stretched link
                  </a>{" "}
                  will only be spread over the <code>p</code>-tag, because a
                  transform is applied to it.
                </p>
              </div>
            </div>
          </form>
          <DienteModal
            isModalActive={dienteModalIsActive}
            setIsModalActive={setDienteModalIsActive}
          />
        </div>
      </div>
    </div>
  );
};

export default Radiografia;
