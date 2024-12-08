"use client";

import NumberListPage from "@/app/components/baydin/number/NumberListPage";
import PreviousButton from "@/app/components/button/PreviousButton";
import { useGetAllDataQuery } from "@/lib/features/baydin/baydinApiSlice";

export default function QuestionPage({
  params,
}: {
  params: { question_number: string };
}) {
  const { question } = useGetAllDataQuery(undefined, {
    selectFromResult: ({ data }) => ({
      question: data?.questions.find(
        (q) => q.questionNo === Number(params.question_number)
      ),
    }),
  });

  return (
    <div>
      <PreviousButton />
      <p className={`font-bold text-xl`}>{question?.questionName}</p>
      <NumberListPage questionNo={params.question_number} />
    </div>
  );
}
