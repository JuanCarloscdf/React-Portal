import { useRef } from "react";
import { useMessage } from "../hooks/useMessage";

const AnoterComponent = () => {
    const { open } = useMessage()
    const anotercomponentRef = useRef(0)
    anotercomponentRef.current++
    console.log("AnoterComponent", anotercomponentRef.current)
    return (
        <div>
            <h1>anotercomponent Component</h1>
            <div className='text-white text-start'>
                <h1 className=' text-5xl font-bold'>higer title to test line height</h1>
                <p className='font-extralight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, cum accusamus porro dolorum voluptates eveniet repellat perspiciatis enim alias doloremque atque magnam nemo fugiat illum id asperiores, in iure animi.
                    Quia qui voluptates reiciendis error voluptate laborum accusamus dolores deserunt sunt, nulla, sequi assumenda sint ad quam et at. Sunt voluptate mollitia expedita, saepe id accusamus amet impedit ab omnis.
                    Doloribus harum debitis ratione corrupti exercitationem voluptas quo ad iusto eligendi in. Culpa reprehenderit et qui blanditiis omnis delectus. Qui repellendus sapiente quis impedit reprehenderit asperiores animi deleniti velit excepturi?
                    Voluptate perferendis deserunt repellat, nobis earum porro quos. Vitae suscipit porro consequuntur nemo voluptas nulla, laudantium sit laborum numquam minima quos id sequi nobis autem reprehenderit provident nesciunt, culpa corporis!
                    Quia eos provident praesentium unde harum amet perferendis fuga, laborum, dolor magnam molestias inventore rerum animi incidunt quas temporibus officiis totam fugiat quibusdam delectus reprehenderit consequuntur eligendi? Quasi, necessitatibus reprehenderit?</p>
            </div>
            <button onClick={() => open()}>open ref portal</button>
        </div>
    );
};

export default AnoterComponent;