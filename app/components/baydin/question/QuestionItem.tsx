import { QuestionInterface } from "@/lib/features/baydin/baydinApiSlice";
import { useRouter } from "next/navigation";

export default function QuestionItem({
  question,
}: {
  question: QuestionInterface;
}) {
  const router = useRouter();
  const routeHandler = () => {
    router.push(`question/${question.questionNo}`);
  };
  return (
    <div className={`flex items-center gap-3 my-5 cursor-pointer group`}>
      <p className={` font-bold border border-teal-300 p-2 rounded-full  group-hover:bg-teal-400`}>{question.questionNo}</p>
      <div className={`sm:w-[400px] p-2 rounded bg-teal-300  hover:bg-teal-400`} onClick={routeHandler}>{question.questionName}</div>
    </div>
  );
}
