import React from "react";
import { Faqitems } from "../../Data/dummy";
import { FiChevronDown, FiChevronUp,} from "react-icons/fi";
import { useState } from "react";

const Faq = () => {
  const [faqanswer, setFaqanswer] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="space-y-4">
        <div className="">
            <h1 className="text-4xl font-bold  text-center capitalize my-8">Frequently asked questions</h1>
        </div>
        {Faqitems.map((item, index) => {
          return (
            <div className="my-4" key={item.id}>
              <div className="px-4 py-2 flex justify-between items-center my-1 bg-white rounded-md">
                <h1 className="capitalize text-lg">{item.title}</h1>
                <button className="">
                  {faqanswer ? (
                    <FiChevronUp
                      className="text-xl"
                      onClick={() => setFaqanswer(false)}
                    />
                  ) : (
                    <FiChevronDown
                      className="text-xl"
                      onClick={() => setFaqanswer(true)}
                    />
                  )}
                </button>
              </div>
              <div
                className={`${
                  faqanswer ? "block" : "hidden"
                } transition-all index`}
              >
                <div className="px-8 py-2 bg-white rounded-md">
                  <p className="text-base capitalize">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
