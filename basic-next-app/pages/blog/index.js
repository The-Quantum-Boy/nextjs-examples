import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Navbar />
      hellow world my blog
      {data.slice(0, 5).map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <Link href={`/blog/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
