import React from "react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>This from the about page</h1>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9gFo6k7VT8FVS9r7EMcBL8DJf_l2BUSCt4EIK9tw&s"
        width="500"
        height="400"
      ></Image>
    </div>
  );
};

export default about;
