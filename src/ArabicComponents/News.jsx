
const News = ({ news }) => {
  if(!news || news.length === 0) {
    return null
  }
  return (
    <div className="min-h-[424px] w-full bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#C2AB80] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white]  mb-[30px]">
        <h1 className="text-[20px]">Corporate News</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-[8px]"
          href=""
        >
          عرض الكل
        </a>
      </div>

      <div className="flex flex-col gap-[40px]">
      {news.map((item, index) => (
        <div className='flex gap-[30px] items-center flex-wrap px-[30px] border-b-[1px] pb-[26.5px]'>            <div style={{
              backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} className='w-[106px] h-[70px] shrink-0 bg-slate-300'></div>
            <div className="flex flex-col justify-center gap-[12px] flex-[1_0_0]">
              <h1 className='text-[16px] text-[#444444]'>{item.fields.Title_ar}</h1>
              <p className='text-[13px] font-light'>{item.fields.Preview_ar}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default News
