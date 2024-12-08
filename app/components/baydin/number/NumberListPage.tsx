import { useGetAllDataQuery } from "@/lib/features/baydin/baydinApiSlice";
import NumberList from "@/app/components/baydin/number/NumberList";

export default function NumberListPage({ questionNo }: { questionNo: string }) {
  const { data, isError, isLoading, isSuccess } = useGetAllDataQuery(undefined);

  if (isError) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <NumberList questionNo={questionNo} numberList={data.numberList} />
      </div>
    );
  }
}
