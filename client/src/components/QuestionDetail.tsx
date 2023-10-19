import React from "react";

const QuestionDetail = () => {
  return (
    <div className="flex justify-center mt-80">
      <div className="w-2/6 bg-slate-100">
        <div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            amet ipsam voluptates laboriosam quaerat dolor ratione, obcaecati
          </p>
        </div>
        <div>
            <p className="bg-blue-300 my-5 py-2 hover:bg-blue-500 rounded-md">cau tl1</p>
            <p className="bg-blue-300 my-5 py-2 hover:bg-blue-500 rounded-md">cau tl1</p>
            <p className="bg-blue-300 my-5 py-2 hover:bg-blue-500 rounded-md">cau tl1</p>
            <p className="bg-blue-300 my-5 py-2 hover:bg-blue-500 rounded-md">cau tl1</p>
        </div>
        <div className="flex justify-end">
            <button className="bg-amber-500 font-semibold p-2 rounded-md">Next Questions</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
