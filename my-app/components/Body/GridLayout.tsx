import Link from "next/link";
import { GridLayoutData } from "./GridLayoutData";


// export default function GridLayout(props:any){
//     return(
//         <div className={props.GridBlock}>
//             <h1>{props.BlockTitle}</h1>
//             <p>{props.BlockContent}</p>
//             <p>
//                 <Link className="px-6 py-2 mt-4 inline-block bg-black text-white" href={props.BlockLInk} target="_blank">View More</Link>
//             </p>
//         </div>
//     )
// } 

export default function GridLayout(){
    return(
        <>
            {GridLayoutData.map((val) => {
                    return(
                        <>
                        <div className={val.GridBlock}>
                            {val.BlockTitle &&
                                <h1>{val.BlockTitle}</h1>
                            }
                            {val.BlockContent && 
                                <p>{val.BlockContent}</p>
                            }
                            {val.BlockLInk &&
                                <div>
                                    <Link className="px-6 py-2 mt-4 inline-block bg-black text-white" href={val.BlockLInk} target="_blank">View More</Link>
                                </div>
                            }
                         </div>
                        </>
                    )
                }            
            )}
        </>
    )
}