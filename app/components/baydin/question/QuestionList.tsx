import { QuestionInterface } from "@/lib/features/baydin/baydinApiSlice";
import QuestionItem from "@/app/components/baydin/question/QuestionItem";

export default function QuestionList({
  questionList,
}: {
  questionList: QuestionInterface[];
}) {
  return (
    <div>
      {questionList.map((question) => (
        <QuestionItem key={question.questionNo} question={question} />
      ))}
    </div>
  );
}
