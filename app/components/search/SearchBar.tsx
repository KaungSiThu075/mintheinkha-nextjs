"use client";
import React, {ChangeEvent, useState} from "react";
import {useGetAllDataQuery} from "@/lib/features/baydin/baydinApiSlice";
import QuestionItem from "@/app/components/baydin/question/QuestionItem";
import SearchQuestionList from "@/app/components/search/SearchQuestionList";

export default function SearchBar(){
    const [searchKeyword,setSearchKeyword] = useState("");

    const keywordChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value)
    }

    const { data:bayDinResponseStructure, isError, isLoading, isSuccess } = useGetAllDataQuery(undefined);

    if(isError){return <div>Error</div>}

    if(isLoading){return <div>Loading...</div>}

    if(isSuccess)
    {
        const searchKeywordQuestions = searchKeyword ? bayDinResponseStructure.questions.filter(q=>q.questionName.includes(searchKeyword)) : [];

        return(
            <div>
                <input
                    value={searchKeyword}
                    onChange={keywordChangeHandler}
                    className=" w-full outline outline-black py-1 px-2 cursor-pointer rounded"
                    type="text"
                    placeholder="သိလိုသော မေးခွန်းအား ရှာဖွေပါ..."
                />
                <div className={` ${searchKeyword ? 'block' : 'hidden'}`}>
                    {searchKeywordQuestions.length ?
                        <SearchQuestionList questions={searchKeywordQuestions}/>:
                        <div className={` h-auto m-2 p-2 w-[400px] absolute overflow-y-auto bg-teal-200 rounded z-10`}>ရှာမတွေ့ပါ</div>}
                </div>
            </div>
        )
    }
}