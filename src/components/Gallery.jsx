import { Link } from "react-router-dom";

const Gallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) {
    return <div>No gallery available.</div>;
  }
  return (
    <div className="pt-[30px] pb-[40px] sm:px-[41px] px-[5vw] w-full bg-[#C2AB80]">
      <div className="w-full flex justify-between items-center mb-[30px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">Gallery</h1>
        <Link className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#C2AB80] rounded-md">
          View All
        </Link>
      </div>

      <div className="flex gap-[41.88px] lg:flex-nowrap flex-wrap">
        {gallery.map(
          (
            item,
            index //slice(0,3)
          ) => (
            <div
              key={index}
              className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-[180px] bg-slate-300">
                  <img
                    src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}`}
                    alt={item.Title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-[27.88px] mt-[20px] min-h-[130px] flex flex-col justify-between">
                  <div>
                    <h1 className="sm:text-[16px] text-[11px] mb-[5px]">
                      {item.fields.Title}
                    </h1>
                    <p className="sm:text-[14px] text-[9px] font-light text-[#888888]">
                      {item.fields.subtitle_en}
                    </p>
                  </div>
                </div>
              </div>

              <button className="mx-[27.88px] my-[16px] sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] rounded-md w-[120px]">
                View Gallery
              </button>
            </div>
          )
        )}
      </div>

      {/* // <div className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden">
      //   <div className="w-full h-[180px] bg-slate-300"></div>
      //   <div className="px-[27.88px] mt-[20px]">
      //     <h1 className="sm:text-[16px] text-[11px] mb-[5px]">Event Name Here</h1>
      //     <p className="sm:text-[14px] text-[9px]m font-light text-[#888888]">
      //       Lorem Ipsum is simply dummy text of the printing and typesetting
      //       industry.
      //     </p>

      //     <button className="sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] mt-[20px] rounded-md">View Gallery</button>
      //   </div>
      // </div>

      // <div className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden">
      //   <div className="w-full h-[180px] bg-slate-300"></div>
      //   <div className="px-[27.88px] mt-[20px]">
      //     <h1 className="sm:text-[16px] text-[11px] mb-[5px]">Event Name Here</h1>
      //     <p className="sm:text-[14px] text-[9px]m font-light text-[#888888]">
      //       Lorem Ipsum is simply dummy text of the printing and typesetting
      //       industry.
      //     </p>

      //     <button className="sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] mt-[20px] rounded-md">View Gallery</button>
      //   </div>
      // </div>
      // </div> */}
    </div>
  );
};

export default Gallery;
