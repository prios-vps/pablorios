import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-row mt-20 border-t pt-8">
      <a href="#">
        <FaAt />
        Correo: pablo_rios_p@protonmail.com
      </a>
      <a href="#">
        <FaGithub />
        Github: github.com/PabloRiosP
      </a>
      <a href="#">
        <FaLinkedin />
        Linkedin: 
      </a>
    </footer>
  );
}

