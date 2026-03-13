import profile from "../assets/profile.jpg";
import Card from "./Card";

function About() {
  return (
    <Card title="About Me">

      <img className="profile" src={profile} alt="Profile photo" />

      <p>
        Hi, I'm Rishalenn! I like learning, trying new things, and growing as a person.
      </p>

      <p>
        Email:{" "}
        <a href="mailto:pelarijarishalenn03@gmail.com">
          pelarijarishalenn03@gmail.com
        </a>
      </p>

    </Card>
  );
}

export default About;