import { useState } from "react"
import { data } from "./Data"
import OneAccordion from "./OneAccordion"

export default function Accordion(){
    const [activeIndex,setActiveIndex] = useState(0)

    return(
        <div className="main-container">
            {data.map((item)=>(<OneAccordion key={item.id} id={item.id} title={item.title} content={item.body} isActive={activeIndex === item.id} setActiveIndex={setActiveIndex} onShow={()=>setActiveIndex(item.id)}/>))}
        </div>
    )
}