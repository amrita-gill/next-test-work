import { AccordData } from "./AccordData";


   export const AccordionItem = ({open, toggle}) =>{
        return(
            <>
            <div className="wrapper">
                
            {/* {AccordData.map((data, index) => {
                return(
                    <> */}
                        <div className="bg-white flex justify-between items-centre cursor-pointer"  onClick={toggle}>
                            <p>{AccordData[0].title}</p>
                        </div>
                    {/* </>
                )
            })} */}
            </div>
            </>
        )
    }



