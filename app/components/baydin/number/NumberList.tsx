import NumberItem from "@/app/components/baydin/number/NumberItem";

export default function NumberList({
  numberList,
  questionNo,
}: {
  numberList: string[];
  questionNo: string;
}) {
  return (
    <div className=" grid grid-cols-9 gap-4 my-4">
      {numberList.map((number, index) => (
        <NumberItem questionNo={questionNo} key={index} number={number} />
      ))}
    </div>
  );
}
