import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Based on my experience as a first generation CSTAD student and a third-year student of the College of Science and Technology (COST) of the University of Cambodia. I gained a lot of experience and deepened my skills in Web App skills in the meantime, I also learned about Flutter, the cross-platform applications by using a UI/UX design and uses the Flutter framework to create mobile applications that are responsive, scalable, and visually appealing.
        </p>

        <br />

        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p> */}
      </div>
    </div>
  );
};

export default About;
