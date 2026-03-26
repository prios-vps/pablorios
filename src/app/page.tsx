import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <p className="flex text-left text-2xl">Desarrollo soluciones a partir de problemas reales, priorizando comprensión del contexto y decisiones técnicas claras.</p>
      <div className="flex justify-center items-center text-[100px] gap-4">
        <RiNextjsFill className="icon-svg" />
        <FaReact className="icon-svg" />
        <FaPython className="icon-svg" />
        <BsJavascript className="icon-svg" />
        <BsTypescript className="icon-svg" />
        <FaPhp className="icon-svg" />
      </div>
    </div>
  );
}

