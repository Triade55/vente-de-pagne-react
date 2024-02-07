import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container bg-gris px-3">
        <h1 className="text-center">Contactez nous</h1>
        <p className="text-center">
          Vous pouvez nous contactez avec les liens ci-dessous ou envoyer un
          message grace au fourmualaire de gauche
        </p>
        <div className="row p-6">
          <div className="col-6">
            <form>
              <input
                type="text"
                placeholder="entrez votre nom"
                className="col-12 col-md-6 form-control my-3 p-4"
              />
              <input
                type="email"
                placeholder="entrez votre email"
                className="col-12 col-md-6 form-control my-3 p-4"
              />
              <textarea
                placeholder="entrez votre messages"
                className="col-12 col-md-6 form-control my-3 p-4"
              ></textarea>
              <button
                type="submit"
                className=" col-12 btn btn-outline-success p-3"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="offset-1 col-5">
            <div className="card mt-3 p-4 rounded-4">
              <div className="row">
                <div className=" col-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </div>
                <div className="col-10 ">
                  <div className="fs-4">LOCALISATION</div>
                  <div className="mt-2 ">Plateau,rue du cormerce</div>
                </div>
              </div>
            </div>

            <div className="card mt-3 p-4 rounded-4">
              <div className="row">
                <div className=" col-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg>
                </div>
                <div className="col-10 ">
                  <div className="fs-4">Addresse electronique</div>
                  <div className="mt-2 ">exemple12345@domaine.xyz</div>
                </div>
              </div>
            </div>
            <div className="card mt-3 p-4 rounded-4">
              <div className="row">
                <div className=" col-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </div>
                <div className="col-10 ">
                  <div className="fs-4">Télephone</div>
                  <div className="mt-2 ">(+225) 0768280690</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
