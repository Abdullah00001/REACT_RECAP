import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(response.data);
      } catch (error) {
        setLoading(false);
        const err = error as any;
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center flex-col h-[80vh]">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default Posts;
