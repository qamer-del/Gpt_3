const Blocard = ({ img,date, title }) => (
    <div className=' bg-secondary text-white rounded-tl-[50px] md:max-w-[327.34px] md:max-h-[323.84px]  '>
    <img src={img} alt="" className='w-full' />
     <p className='px-2 font-bold text-[11.3px] pt-2'>{date}</p>
     <h2 className='px-2 pb-[40px] font-extrabold text-sm leading-[30px]'>{title}</h2>
     <p className='p-4 font-bold text-[11px]'>Read Full Article</p>
  </div>
  );
  export default Blocard;