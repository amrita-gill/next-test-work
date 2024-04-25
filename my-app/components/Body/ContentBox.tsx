import GridLayout from "./GridLayout";

export default function ContentBox(){
    return(
        <div className="site--container w-full lg:w-11/12 lg:mx-auto">
            <div className="site--inner grid grid-cols-3 gap-7 content-evenly py-9">
                <GridLayout />
            </div> 
        </div>
    )
}
