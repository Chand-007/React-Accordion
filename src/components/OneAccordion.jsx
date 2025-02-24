import { useState } from "react";
import '../styles/Accordion.css'


export default function OneAccordion({id,title,content}){
    const [active,setActive] = useState(false)
            return(
                <div className="accordion-container" key={id}>
                    <div className="accordion-title" >
                        <p>{title}</p>
                        <button className="acc-button" onClick={()=>setActive(prev => !prev)}>{active?"hide":"show"}</button>
                    </div>
                    {active && (<div className="accordion-body">{content}</div>)}
                    
                </div>

    )
}