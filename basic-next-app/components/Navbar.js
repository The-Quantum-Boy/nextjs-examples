import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a> About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a> Contact</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a> Blog</a>
          </Link>
          <Link href="/product" legacyBehavior>
            <a> Product</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
