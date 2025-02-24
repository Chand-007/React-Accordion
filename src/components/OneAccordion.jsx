import { useState } from "react";
import '../styles/Accordion.css'


export default function OneAccordion({id,title,content,isActive,setActiveIndex,onShow}){
            return(
                <div className="accordion-container" key={id}>
                    <div className="accordion-title" >
                        <p>{title}</p>
                        <button className="acc-button" onClick={onShow}>{isActive?"hide":"show"}</button>
                    </div>
                    {isActive && (<div className="accordion-body">{content}</div>)}
                    
                </div>

    )
}