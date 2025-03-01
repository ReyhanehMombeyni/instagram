import Navbar from "../../components/Layout/Navbar";
import Post from "../../components/posts/Post"
export default function Home() {
  return (
    <main className="flex items-center">
        <Navbar/>
        <Post/>
    </main>
  )
}
