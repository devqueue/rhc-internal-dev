const Gallery = ({ gallery }) => {

  if (!gallery || gallery.length === 0) {
    return <div>No gallery available.</div>;
  }
  return (
    <div className="pt-[30px] pb-[40px] px-[41px] w-full bg-[#C2AB80]">
      <div className="w-full flex justify-between items-center mb-[30px] text-[white]">
        <h1 className="text-[20px]">Gallery</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] bg-white text-[#C2AB80] rounded-md"
          href=""
        >
          View All
        </a>
      </div>
      

      <div className="flex gap-[41.88px] flex-wrap">
      {gallery.map((item, index) => (
      <div key={index} className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden">
        <div className="w-full h-[180px] bg-slate-300">
        <img src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.image_name}`} alt={item.Title} className="object-cover w-full h-full" />
        </div>
        <div className="px-[27.88px] mt-[20px]">
          <h1 className="text-[16px] mb-[5px]">{item.fields.Title}</h1>
          <p className="text-[14px]m font-light text-[#888888]">
          {item.fields.subtitle_en}
          </p>

          <button className="text-[14px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] mt-[20px] rounded-md">View Gallery</button>
        </div>
      </div>
      ))}
      </div>


      {/* // <div className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden">
      //   <div className="w-full h-[180px] bg-slate-300"></div>
      //   <div className="px-[27.88px] mt-[20px]">
      //     <h1 className="text-[16px] mb-[5px]">Event Name Here</h1>
      //     <p className="text-[14px]m font-light text-[#888888]">
      //       Lorem Ipsum is simply dummy text of the printing and typesetting
      //       industry.
      //     </p>

      //     <button className="text-[14px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] mt-[20px] rounded-md">View Gallery</button>
      //   </div>
      // </div>

      // <div className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden">
      //   <div className="w-full h-[180px] bg-slate-300"></div>
      //   <div className="px-[27.88px] mt-[20px]">
      //     <h1 className="text-[16px] mb-[5px]">Event Name Here</h1>
      //     <p className="text-[14px]m font-light text-[#888888]">
      //       Lorem Ipsum is simply dummy text of the printing and typesetting
      //       industry.
      //     </p>

      //     <button className="text-[14px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] mt-[20px] rounded-md">View Gallery</button>
      //   </div>
      // </div>
      // </div> */}
    </div>
  );
};

export default Gallery;
