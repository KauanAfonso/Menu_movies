

export function Paginacao({sumPagination, backPagination}){
    

    return(

        <div>
            <button onClick={sumPagination}>
                next
            </button>

            <button onClick={backPagination}>
                Back
            </button>
        </div>
        
    )
}