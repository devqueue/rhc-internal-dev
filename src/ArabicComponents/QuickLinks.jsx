const QuickLinks = () => {
  const links = [
    { src: "/icons/ERPIconAr.svg", alt: "ERP Icon", label: "ERP" },
    {
      src: "/icons/RealEstateIconAr.svg",
      alt: "Real Estate",
      label: "Real Estate",
    },
    { src: "/icons/DMSAr.svg", alt: "DMS" },
    {
      src: "/icons/SelfServiceIconAr.svg",
      alt: "Employee self-service",
      label: "Employee self-service portal",
    },
    { src: "/icons/HelpIconAr.svg", alt: "Help Desk", label: "Help Desk" },
    { src: "/icons/MidanAr.svg" },
    { src: "/icons/BookRoomsAr.svg", alt: "Book rooms and meetings" },
    { src: "/icons/TrainingAr.svg", alt: "Training" },
    { src: "/icons/ShamilAr.svg", alt: "Shamil" },
  ];
  return (
    <div className="w-full bg-white">
      <h1>Quick Links</h1>
      <div className="w-full flex md:justify-center justify-start gap-[20px] flex-wrap mt-[20px]">
        {links.map((link, index) => (
          <div
            key={index}
            className="md:w-[7vw] md:h-[7vw] w-[15vw] h-[15vw] rounded-lg flex flex-col justify-center gap-[12px] items-center"
          >
            <img className="w-full h-full object-contain" src={link.src} alt={link.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
