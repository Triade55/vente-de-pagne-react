import Header from "../components/Header";
import Section from "../components/Section";
import card1 from "../images/card1.jpeg";

const Home = () => {
  return (
    <>
      <Header />
      <Section
        title="Qui sommes nous ?"
        img={card1}
        position="left"
        bg="#ecbb92"
        text="
        Chez nous, la vente de pagnes va bien au-delà du commerce – c'est une célébration de l'identité culturelle et de l'élégance intemporelle. Notre histoire commence avec la passion de partager la beauté des pagnes, une vision qui a évolué pour devenir une destination incontournable pour les amateurs de mode qui apprécient l'authenticité. Chaque pagne soigneusement sélectionné dans notre collection est une pièce d'art qui allie l'héritage culturel à une esthétique moderne. Chez IvoirCloth, nous nous engageons à offrir une expérience d'achat où la qualité rencontre l'éthique, et où chaque client devient le gardien d'une tradition revisitée. Joignez-vous à nous dans cette aventure où le tissu devient une expression personnelle, et chaque achat soutient non seulement le style individuel, mais aussi la préservation des savoir-faire artisanaux locaux. Bienvenue chez ivoirCloth – l'essence de la mode qui transcende le temps et les frontières. "
      />
      <section className="text-gray-400 body-font p-4" id="about">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center rounded-3 bg-light">
          <div className="col-12 text-center fs-1 text-uppercase">
            Nos collections
          </div>
          <div className="row pt-4">
            <div className="col-6">
              <div class="card mb-3 p-0" style={{ maxWidth: 540 }}>
                <div class="row g-0 ">
                  <div class="col-md-4 ">
                    <img
                      src="https://picsum.photos/200/300"
                      class="img-fluid rounded-start w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Collection 1</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card mb-3 p-0" style={{ maxWidth: 540 }}>
                <div class="row g-0 ">
                  <div class="col-md-4 ">
                    <img
                      src="https://picsum.photos/200/300"
                      class="img-fluid rounded-start w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Collection 2</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card mb-3 p-0" style={{ maxWidth: 540 }}>
                <div class="row g-0 ">
                  <div class="col-md-4 ">
                    <img
                      src="https://picsum.photos/200/300"
                      class="img-fluid rounded-start w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Collection 3</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card mb-3 p-0" style={{ maxWidth: 540 }}>
                <div class="row g-0 ">
                  <div class="col-md-4 ">
                    <img
                      src="https://picsum.photos/200/300"
                      class="img-fluid rounded-start w-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Collection 4</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font p-4" id="about">
        <div
          className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center rounded-3"
          style={{ background: "#98ec92" }}
        >
          <div className="col-12 text-center fs-1 text-uppercase">
            Questions fréquemment posées{" "}
          </div>
          <div className="row pt-4">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        title="title section"
        img={card1}
        position="right"
        text="zzzzzzzz"
      />
    </>
  );
};

export default Home;
