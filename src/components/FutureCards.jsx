const FutureCards = ({ content, title }) => (
    <div className=" md:flex flex-cols-2 flex-row  lg:ml-[25px]   ">
        <div className="lg:w-[50%] ">
        <p className="  relative font-extrabold text-lg leading-[24px] my-2 md:mb-16  text-white  w-[200px] bg-transparent">
            {title}
             <span className="absolute  w-[20%]  top-[-7px] left-0    border-gradiant border-t-4 py-2 "></span> 
          </p>
        </div>
      
      <p className="font-medium flex text-sm leading-[24px] text-font md:mb-16 lg:w-[50%] w-full  ">
        {content}
      </p>
    </div>
  );
  export default FutureCards;