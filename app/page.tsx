import type { Metadata } from "next";
import BayDinHomePage from "@/app/components/baydin/BayDinHomePage";

export default function IndexPage() {
  return <BayDinHomePage />;
}

export const metadata: Metadata = {
  title: "Min Thein Kha",
};
