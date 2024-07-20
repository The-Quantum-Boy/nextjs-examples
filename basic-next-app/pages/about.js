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
        src=""
        width="500"
        height="400"
      ></Image>
    </div>
  );
};

export default about;
