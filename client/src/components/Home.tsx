const Home = () => {
  return (
    <div className="flex justify-center mt-80">
      <div className="w-2/6 h-96 bg-slate-200 p-10">
        <h1 className="text-3xl">Setup Quiz</h1>
        <form className="">
          <div className="my-7">
            <label>Number Of Questions</label>
            <br />
            <input className="w-full" type="number" />
          </div>
          <div className="my-7">
            <label>Category</label>
            <br />
            <select className="w-full" name="" id="">
              <option value="toan">Toán</option>
              <option value="tieng viet">Tiếng Việt</option>
              <option value="tieng anh">Tiếng anh</option>
            </select>
          </div>
          <div className="my-7">
            <label>Dificulty</label>
            <br />
            <select className="w-full" name="" id="">
              <option value="de">Dễ</option>
              <option value="trung binh">Trung Bình</option>
              <option value="kho">Khó</option>
            </select>
          </div>
          <div className="my-7">
            <button className="bg-amber-500 w-full h-8 rounded-lg font-bold">Start</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
