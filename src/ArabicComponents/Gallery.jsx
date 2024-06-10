import { Link } from "react-router-dom";

const Gallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) {
    return <div>No gallery available.</div>;
  }
  return (
    <div className="w-full bg-[#f9f9f9] shadow-black border-[0.5px] drop-shadow-md pb-4 shadow-md">
      <div className=" px-10 w-full py-[16px] bg-[#C2AB80] flex justify-between items-center mb-[30px] bg text-[white] rounded-[8px] rounded-bl-none rounded-br-none">
        <h1 className="sm:text-[20px] text-[12px]">معرض الصور</h1>
        <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#C2AB80] rounded-[8px]"
          // to="/ar/gallery"
          // state={gallery}
        >
          عرض الكل
        </Link>
      </div>

      <div className="flex gap-[41.88px] px-[30px] lg:flex-nowrap flex-wrap">
        {gallery.map(
          (
            item,
            index //.slice(0,3)
          ) => (
            <div
              key={index}
              className="w-[404px] min-h-[355px] bg-white rounded-lg overflow-hidden flex flex-col justify-between shadow-md"
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
                      {item.fields.event_name_ar}
                    </h1>
                    <p className="sm:text-[14px] text-[9px]m font-light text-[#888888]">
                      {item.fields.subtitle_ar}
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                // to= "" //{`/ar/galleryview/${item.id}`}
                // state={{ gallery: item }}
                className="mx-[27.88px] my-[16px] sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] rounded-md w-[120px]">
                عرض الصور
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
