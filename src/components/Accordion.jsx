
import { data } from "./Data"
import OneAccordion from "./OneAccordion"

export default function Accordion(){

    return(
        <div className="main-container">
            {data.map((item)=>(<OneAccordion key={item.id} id={item.id} title={item.title} content={item.body}/>))}
        </div>
    )
}