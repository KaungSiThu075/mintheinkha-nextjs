import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const router = useRouter();
  const btnBackToPreviousPageHandler = () => {
    router.back();
  };
  return (
    <div>
      <button
        className={` bg-teal-300 py-1 px-4 rounded my-2 hover:bg-teal-400 hover:text-white`}
        type="button"
        onClick={btnBackToPreviousPageHandler}
      >
        BACK
      </button>
    </div>
  );
}
