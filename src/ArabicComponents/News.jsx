import { Link } from "react-router-dom";

const News = ({ news }) => {
  if (!news || news.length === 0) {
    return null;
  }
  // console.log(news)
  return (
    <div className="min-h-[424px] w-full bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#C2AB80] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white]  mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">اخبار الشركة</h1>
        <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#C2AB80] rounded-[8px]"
          to="/ar/news"
          state={news }
        >
          عرض الكل
        </Link>
      </div>

      <div className="flex flex-col gap-[40px] max-h-[500px] overflow-y-auto">
        {news.map((item, index) => (
          <div key={index} className="flex gap-[30px] items-center flex-wrap px-[30px] border-b-[1px] pb-[26.5px]">

            <div
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[106px] h-[70px] shrink-0 bg-slate-300"
            ></div>
            <div className="flex flex-col justify-center gap-[12px] flex-[1_0_0]">
              <h1 className="sm:text-[16px] text-[11px] text-[#444444]">
                {item.fields.Title_ar}
              </h1>
              <p className="text-[13px] font-light">{item.fields.Preview_ar}</p>
              <p className="text-[13px] font-light">
              تاريخ: &nbsp;

              {
                new Date(item.fields.date_published).toLocaleString("en-AU", 
                {
                  // dateStyle: "short",
                  timeZone: "Asia/Riyadh",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                }) 
              
              }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
