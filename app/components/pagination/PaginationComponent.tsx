import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, {ChangeEvent, Dispatch} from "react";

interface PaginationComponentProps {
    countQuantity:number,
    setCurrentPage:Dispatch<React.SetStateAction<number>>
}

export default function PaginationComponent({countQuantity,setCurrentPage}:PaginationComponentProps){

    const paginateHandler = (e:ChangeEvent<unknown>,value:number) => {
        console.log('e ',e);
        setCurrentPage(value);
    }

    return(
        <div className={`w-full flex items-center justify-center`}>
            <Stack spacing={2}>
                <Pagination onChange={paginateHandler} count={countQuantity} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}