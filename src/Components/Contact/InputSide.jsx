
const InputSide = () => {
  return (
    <form className="relative p-6 pb-24 bg-white  rounded-lg w-full">
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter Your name"
          className="w-full text-gray-800 text-sm p-2 border-b-2 border-[#C73450] outline-none border-t-0 border-l-0 border-r-0 focus:border-[#C73450]"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          placeholder="aljay126@gmail.com"
          className="w-full text-gray-800 text-sm p-2 border-b-2   border-t-0 border-l-0 border-r-0 border-[#C73450] outline-none focus:[#C73450]"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-medium">Phone</label>
        <input
          type="number"
          placeholder="+233546227893"
          className="w-full text-gray-800 text-sm p-2 border-b-2  border-t-0 border-l-0 border-r-0 border-[#C73450] outline-none focus:[#C73450]"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 font-medium">Message</label>
        <textarea
          placeholder="Write your message"
          className="w-full text-gray-800 text-sm p-2 border-b-2  border-t-0 border-l-0 border-r-0 border-[#C73450] outline-none focus:[#C73450]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="absolute bottom-6 right-6 bg-[#C73450] text-white font-medium py-2 px-5 rounded-lg border-[#C73450] outline-none focus:[#C73450]"
      >
        Send Message
      </button>
    </form>
  );
};

export default InputSide;
