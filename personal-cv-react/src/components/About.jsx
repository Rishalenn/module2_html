import profile from "../assets/profile.jpg";
import Card from "./Card";

function About() {
  return (
    <Card title="About Me">
      <img src={profile} alt="Profile photo" width="150" />

      <p>
        Hi, I'm Rishalenn! I like learning, trying new things, and growing as a person.
      </p>

      <p>Email: pelarijarishalenn03@gmail.com</p>
    </Card>
  );
}

export default About;