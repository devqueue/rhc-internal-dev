import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    {
      src: "/icons/ERPIcon.svg",
      alt: "ERP Icon",
      path: "https://arhc.operations.eu.dynamics.com/",
    },
    {
      src: "/icons/RealEstateIcon.svg",
      alt: "Real Estate",
      path: "https://propertyprod.crm4.dynamics.com/main.aspx",
    },
    {
      src: "/icons/e-com.svg",
      alt: "DMS",
      path: "https://ecommunication.riyadhholding.sa/",
    },
    {
      src: "/icons/SelfServiceIcon.svg",
      alt: "Employee self-service",
      path: "https://selfservice.riyadhholding.sa/",
    },
    {
      src: "/icons/HelpIcon.svg",
      alt: "Help Desk",
      path: "https://riyadhholding-amc.ivanticloud.com/",
    },
    {
      src: "/icons/Midan.svg",
      path: "https://maidan.riyadhholding.sa",
    },
    {
      src: "/icons/BookRooms.svg",
      alt: "Book rooms and meetings",
      path: "https://riyadhholding.provizit.com/",
    },
    {
      src: "/icons/Training.svg",
      alt: "Training",
      path: "https://wevolve.percipio.com/",
    },
    {
      src: "/icons/office.svg",
      alt: "Office & Outlook",
      path: "https://outlook.office.com/mail/",
    },
  ];
  return (
    <div className="w-full bg-white">
      <h1 className="lg:text-[1.5vw] text-[3vw]">Quick Links</h1>
      <div className="w-full flex lg:justify-center justify-start gap-[20px] flex-wrap mt-[20px]">
        {links.map((link, index) => (
          <Link key={index} to={link.path} target="_blank">
            <div className="lg:w-[7vw] lg:h-[7vw] w-[15vw] h-[15vw] rounded-lg flex flex-col justify-center gap-[12px] items-center  border-[#3B729C] overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={link.src}
                alt={link.alt}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
