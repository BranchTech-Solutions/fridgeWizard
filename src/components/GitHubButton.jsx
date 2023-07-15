import React from "react";
import { FaGithub } from 'react-icons/fa';

const GitHubButton = () => {
  return (
    <a 
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:8080`}
      className="
        hover:transform 
        hover:transition-all 
        hover:scale-110 
        cursor-pointer 
        flex 
        items-center 
        justify-center 
        gap-2 
        border 
        border-1 
        border-slate-400 
        rounded-3xl 
        font-mynerve
        text-xl
        mt-4 
        p-3 
        shadow-xl
      "
    >
        <FaGithub size={30}/>
        <span>Sign in with GitHub</span>
    </a>
  );
};

export default GitHubButton;