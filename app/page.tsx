import getAllPosts from "@/lib/getAllPosts";
import PostDisplay from "@/components/PostDisplay";

export default async function Home() {
  const posts=await getAllPosts();
  return (
      <div className={`flex flex-col items-center bg-blue-500 p-4`}>
          <PostDisplay inputPosts={posts}/>
      </div>
  );
}
