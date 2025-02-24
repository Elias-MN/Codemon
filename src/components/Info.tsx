import React from "react";

function Info() {
  return (
    <div className="">
      <div className="w-full px-4 py-20 space-y-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="order-1 md:order-2 text-gray-50 md:ml-16">
            <h3 className="font-press-start-2 text-4xl uppercase mb-4 text-center">
              Lorem Ipsum
            </h3>
            <p className="font-mulish text-base leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="Icon 1"
            className="order-2 md:order-1 w-32 h-32"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="text-gray-50 md:mr-16">
            <h3 className="font-press-start-2 text-4xl uppercase mb-4 text-center md:text-left">
              Lorem Ipsum
            </h3>
            <p className="font-mulish text-base leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="Icon 2"
            className="w-32 h-32"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="order-1 md:order-2 text-gray-50 md:ml-16">
            <h3 className="font-press-start-2 text-4xl uppercase mb-4 text-center">
              Lorem Ipsum
            </h3>
            <p className="font-mulish text-base leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="Icon 3"
            className="order-2 md:order-1 w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;