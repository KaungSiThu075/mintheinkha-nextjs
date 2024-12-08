"use client";

import PreviousButton from "@/app/components/button/PreviousButton";
import { useGetAllDataQuery } from "@/lib/features/baydin/baydinApiSlice";

export default function NumberPage({
  params,
}: {
  params: { question_number: string; numberlist_number: string };
}) {

  const { answer } = useGetAllDataQuery(undefined, {
    selectFromResult: ({ data }) => ({
      answer: data?.answers.find(
        (a) =>
          a.questionNo === Number(params.question_number) &&
          a.answerNo === Number(params.numberlist_number)
      ),
    }),
  });

  return (
    <div className={`flex flex-col items-center gap-2 justify-center`}>
      <p className={` font-bold text-2xl`}>{answer?.answerResult}</p>
      <PreviousButton />
    </div>
  );
}
