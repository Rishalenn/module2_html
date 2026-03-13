import { useState } from "react";
import Card from "./Card";

function Skills() {

const [visible, setVisible] = useState(true);

return (

<div className="container">

<button onClick={() => setVisible(!visible)}>
Show/Hide Skills
</button>

{visible && (

<Card title="Skills">

<ul className="skills">

<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>React</li>

</ul>

</Card>

)}

</div>

);

}

export default Skills;