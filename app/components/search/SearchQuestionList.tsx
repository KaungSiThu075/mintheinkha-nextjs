import {QuestionInterface} from "@/lib/features/baydin/baydinApiSlice";
import SearchQuestionItem from "@/app/components/search/SearchQuestionItem";

export default function SearchQuestionList({questions}:{questions:QuestionInterface[]}){
    return (
        <div className={`sm:w-[400px]  m-2 h-[200px]  absolute overflow-y-auto bg-teal-200 rounded z-10`}>
            {questions.map(question => <SearchQuestionItem searchQuestion={question}/>)}
        </div>
)
}