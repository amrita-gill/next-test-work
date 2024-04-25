import { AccordData  } from "./AccordData";
import {AccordionItem} from "./AccordionItem";

export default function Accordion(){
    return(
        <> 
            <div className="bg-amber-100 h-screen py-20">
                <div className="max-w-96 m-auto">
                          <AccordionItem />
                </div>
            </div>
        </>
    )
}
