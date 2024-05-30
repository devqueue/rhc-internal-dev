
const NewEmployee = () => {
  return (
    <div className="flex flex-col items-center gap-[30px] bg-[#50917F] px-[20px] py-[30px] rounded-[8px] overflow-hidden">
        <h1 className="text-center text-[20px] text-white font-light h-[28.98px] ">New Employee</h1>

        <div className="h-[145px] w-[124px] bg-slate-300 rounded-[8px] overflow-hidden">

        </div>

        <h2 className="text-center text-[16px] text-white h-[22.94px] self-stretch">Employee Name Here</h2>

        <div className="felx flex-col content-center gap-[5px] pb-[30px] items-center text-center text-white self-stretch border-b-[1px] border-b-[#ffffff57] text-[14px]">
            <h2 className="font-light">Web Developer</h2>
            <h2 className="font-medium">IT Department</h2>
        </div>

        <p className="text-center self-stretch text-[14px] font-light min-h-[41px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      
    </div>
  )
}

export default NewEmployee
