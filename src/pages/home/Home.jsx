import Navbar from "../../components/Layout/Navbar";
import Posts from "../../components/Posts/Posts";
export default function Home() {
  return (
    <main className={"flex items-start"}>
        <Navbar/>
        <Posts />
    </main>
  )
}
