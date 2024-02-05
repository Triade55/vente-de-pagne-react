import Header from "../components/Header";
import Section from "../components/Section";
import card1 from "../images/card1.jpeg";

const Home = () => {
  return (
    <>
      <Header />
      <Section
        title="title section"
        img={card1}
        position="left"
        text="zzzzzzzz"
      />
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
