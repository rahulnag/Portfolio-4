import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";

const AboutComponent = () => {
  return (
    <CommonComponent>
      <AboutPage />
    </CommonComponent>
  );
};

const AboutPage = () => {
  return (
    <div className="container mt-3 about-page">
      <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
        About Myself
      </h2>
      <p
        className="mt-4 about-me"
        data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="800"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Myself <a href="https://samarpandasgupta.com">Samarpan Dasgupta</a>, a
                  Web and Mobile App Designer with MERN Stack and Flutter Developer from
                  Kolkata, India. I am 19 years old with having a great passion for learning
                  new technologies.<br /><br />
  
                  Love to create Websites, Android App with Mobile And Web
                  app designing. I am second year student pursuing BSC Computer
                  Science Hons. I help my clients to build and grow their business with the help of
                  the best web and mobile app design and development.`
              )
              .start();
          }}
          options={{
            delay: 20,
            typeSpeed: 40,
          }}
        />
      </p>
    </div>
  );
};

export default AboutComponent;
