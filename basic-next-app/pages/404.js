import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <div>
        <Navbar/> 
        <h2>We are sorry, page not found</h2>
        <img src="/public/error.png" alt="" />
        <p>
          The page you are looking for might have removed had its name changed
          or is temporarily unavailable.
        </p>
        {/* <Link href="/" legacyBehavior>
          <a>Back to homepage</a>
        </Link> */}
        <a onClick={handleInput}>Back to home</a>
      </div>
    </>
  );
};

export default Error;
