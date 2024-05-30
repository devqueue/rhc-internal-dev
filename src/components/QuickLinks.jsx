const QuickLinks = () => {
  const links = [
    { src: "/icons/ERPIcon.svg", alt: "ERP Icon", label: "ERP" },
    { src: "/icons/RealEstateIcon.svg", alt: "Real Estate", label: "Real Estate" },
    { src: "/icons/HelpIcon.svg", alt: "Help Desk", label: "Help Desk" },
    { src: "/icons/SelfServiceIcon.svg", alt: "Employee self-service", label: "Employee self-service portal" },
    { src: "/icons/DMS.svg", alt: "DMS"},
    { src: "/icons/Midan.svg"},
    { src: "/icons/BookRooms.svg", alt: "Book rooms and meetings"},
    { src: "/icons/Training.svg", alt: "Training"},
    { src: "/icons/Shamil.svg", alt: "Shamil"},
  ];
  return (
    <div className="w-full bg-white">
      <h1>Quick Links</h1>
      <div className="w-full flex gap-[20px] flex-wrap mt-[20px]">
        {links.map((link, index) => (
          <div
            key={index}
            className="w-[90px] h-[90px] rounded-lg flex flex-col justify-center gap-[12px] items-center"
          >
            <img src={link.src} alt={link.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
