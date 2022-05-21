import { FaGithub } from 'react-icons/fa';

function GithubButton({ username }) {
  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="GithubButton"
      title="Check out my GitHub!"
    >
      <FaGithub />
      {username}
    </a>
  );
}

export default GithubButton;
