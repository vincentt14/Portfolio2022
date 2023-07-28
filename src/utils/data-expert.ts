import ReactExpert from "../img/certificate/ReactExpert.jpg";
import FrontEndExpert from "../img/certificate/FrontEndExpert.jpg";

interface IExpert {
  id: number;
  title: string;
  img: string;
  link: string;
  description: string;
  description2: string;
  description3: string;
}

const dataExpert: IExpert[] = [
  {
    id: 1,
    img: ReactExpert,
    title: "React Web Developer Expert",
    link: "https://www.dicoding.com/certificates/JMZVNL38JPN9",
    description: "Dicoding Indonesia",
    description2: "Issued Feb 2023·Expires Feb 2026",
    description3: "Credential ID JMZVNL38JPN9",
  },
  {
    id: 2,
    img: FrontEndExpert,
    title: "FrontEnd Web Developer Expert",
    link: "https://www.dicoding.com/certificates/RVZKKOJ44ZD5",
    description: "Dicoding Indonesia",
    description2: "Issued Nov 2022·Expires Nov 2025",
    description3: "Credential ID RVZKKOJ44ZD5",
  },
];

export default dataExpert;
