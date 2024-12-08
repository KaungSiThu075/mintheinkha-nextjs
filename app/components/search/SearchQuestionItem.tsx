import {QuestionInterface} from "@/lib/features/baydin/baydinApiSlice";
import {useRouter} from "next/navigation";

export default function SearchQuestionItem({searchQuestion}:{searchQuestion:QuestionInterface}){
    const router = useRouter();

    const routeToQuestionHandler = () => {
        router.push(`question/${searchQuestion.questionNo}`);
    }

    return(
        <div>
            <p className={`hover:bg-teal-100 hover:rounded-full my-2 p-2 cursor-pointer`} onClick={routeToQuestionHandler}>{searchQuestion.questionName}</p>
        </div>
    )
}