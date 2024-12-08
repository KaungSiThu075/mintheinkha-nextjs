import { useRouter } from "next/navigation";
import { myanmarToArabic } from "@/app/components/typeConvert";

export default function NumberItem({
  number,
  questionNo,
}: {
  number: string;
  questionNo: string;
}) {
  const numberFromFind = myanmarToArabic.find((n) => n.myanmar === number);

  const numberForUse = numberFromFind?.arabic;

  const router = useRouter();
  const routerHandler = () => {
    router.push(`${questionNo}/number/${numberForUse}`);
  };

  return (
    <div onClick={routerHandler} className={`flex items-center justify-center bg-teal-300 cursor-pointer p-1 font-semibold hover:bg-teal-400 rounded`}>
      <p>{number}</p>
    </div>
  );
}
