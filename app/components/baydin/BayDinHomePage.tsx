"use client";
import { useGetAllDataQuery } from "@/lib/features/baydin/baydinApiSlice";
import QuestionList from "@/app/components/baydin/question/QuestionList";
import SearchBar from "@/app/components/search/SearchBar";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";
import {useState} from "react";

export default function BayDinHomePage() {
  const { data:bayDinResponseStructure, isError, isLoading, isSuccess } = useGetAllDataQuery(undefined);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;

  const startIndex = lastIndex - itemsPerPage;

  if (isError) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isSuccess)
  {
      const totalPages = Math.ceil(bayDinResponseStructure.questions.length/itemsPerPage);

      const paginatedItems = bayDinResponseStructure.questions.slice(startIndex,lastIndex);

      return (
        <div>
            <SearchBar/>
            <QuestionList questionList={paginatedItems} />
            <PaginationComponent countQuantity={totalPages} setCurrentPage={setCurrentPage} />
        </div>
    );
  }
}
