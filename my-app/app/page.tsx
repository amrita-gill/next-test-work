import Header from "@/components/Header/Header";
import Link from "next/link";
import ContentBox from "@/components/Body/ContentBox";
import accordion from "@/components/Accordion/Accordion";
import Accordion from "@/components/Accordion/Accordion";

export default function Home() {
    return(
      <>
        <Header />
        <ContentBox />
        <Accordion />
      </>
    )
}