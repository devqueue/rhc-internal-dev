import { Link } from "react-router-dom";

const Gallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) {
    return <div>No gallery available.</div>;
  }
  return (
    <div className="pt-[30px] pb-[40px] sm:px-[41px] px-[5vw] w-full bg-[#C2AB80]">
      <div className="w-full flex justify-between items-center mb-[30px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">معرض الصور</h1>
        <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#C2AB80] rounded-[8px]"
          href=""
        >
          عرض الكل
        </Link>
      </div>

      <div className="flex gap-[41.88px] md:flex-nowrap flex-wrap">
        {gallery.slice(0,3).map((item, index) => (
          <div
            key={index}
            className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden"
          >
            <div className="w-full h-[180px] bg-slate-300">
              <img
                src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}`}
                alt={item.Title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-[27.88px] mt-[20px] h-[130px] flex flex-col justify-between">
              <div>
              <h1 className="sm:text-[16px] text-[11px] mb-[5px]">
                {item.fields.event_name_ar}
              </h1>
              <p className="sm:text-[14px] text-[9px]m font-light text-[#888888]">
                {item.fields.subtitle_ar}
              </p>
              </div>

              <button className="sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] w-[120px] rounded-md">
              عرض الصور
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
