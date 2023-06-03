
const WgbtCard = ({ content, name, title, img }) => (
  <div className="">
     <p className="text-white font-extrabold text-2xl md:mb-12 mb-5 relative ">
          {title}
          <span className="absolute  w-[10%]  top-[-15px] left-0    border-gradiant border-t-4 py-2 "></span>
        </p>
    <p className="  text-font text-base font-medium leading-[30px]">
      {content}
    </p>
  </div>
);
export default WgbtCard;