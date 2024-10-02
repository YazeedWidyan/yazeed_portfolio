import Link from "next/link";
import React from "react";

const SocialShare = () => {
  return (
    <>
      <li>
        <Link
          className="linkedin"
          href="https://www.linkedin.com/in/yazeedwidyan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </li>
      <li>
        <Link
          className="github"
          href="https://github.com/YazeedWidyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Link>
      </li>
    </>
  );
};

export default SocialShare;
