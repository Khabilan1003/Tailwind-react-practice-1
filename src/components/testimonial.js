import { useState } from "react";

export default function Testimonial() {
  const [selectedUser, setSelectedUser] = useState(1);
  const testimonial = [
    {
      name: "Markin Nesus",
      role: "IOS Developer",
    },
    {
      name: "Vera Duncan",
      role: "Flutter Developer",
    },
    {
      name: "Pirtle Karol",
      role: "Android Developer",
    },
    {
      name: "Mark Joe",
      role: "React Developer",
    },
    {
      name: "Leila Domniuc",
      role: "Angular Developer",
    },
  ];
  return (
    <>
      <section className="bg-color-primary-dark">
        <div className="container mx-auto py-20 lg:px-20">
          <div className="text-center m-auto mb-10 md:w-1/2">
            <h4 className="text-color-secondary font-bold text-2xl">
              User Review
            </h4>
            <h1 className="title">
              What Clients Say About Our App After Use It
            </h1>
          </div>

          <div>
            <div className="flex flex-row space-x-5 flex-wrap items-center justify-center">
              <img
                src={require("../assets/images/user1.jpg")}
                className={`${
                  selectedUser == 1 ? "border-2 border-color-secondary" : ""
                } h-20 w-20 rounded-full cursor-pointer p-1 m-3 user-pic`}
                onClick={() => setSelectedUser(1)}
              />
              <img
                src={require("../assets/images/user2.jpg")}
                className={`${
                  selectedUser == 2 ? "border-2 border-color-secondary" : ""
                } h-20 w-20 rounded-full cursor-pointer p-1 m-3  user-pic`}
                onClick={() => setSelectedUser(2)}
              />
              <img
                src={require("../assets/images/user3.jpg")}
                className={`${
                  selectedUser == 3 ? "border-2 border-color-secondary" : ""
                } h-20 w-20 rounded-full cursor-pointer p-1 m-3  user-pic`}
                onClick={() => setSelectedUser(3)}
              />
              <img
                src={require("../assets/images/user4.jpg")}
                className={`${
                  selectedUser == 4 ? "border-2 border-color-secondary" : ""
                } h-20 w-20 rounded-full cursor-pointer p-1 m-3  user-pic`}
                onClick={() => setSelectedUser(4)}
              />
              <img
                src={require("../assets/images/user5.jpg")}
                className={`${
                  selectedUser == 5 ? "border-2 border-color-secondary" : ""
                } h-20 w-20 rounded-full cursor-pointer p-1 m-3  user-pic`}
                onClick={() => setSelectedUser(5)}
              />
            </div>

            <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
              {testimonial.map((value, index) => (
                <div
                  className={`${
                    selectedUser == index ? "" : "hidden"
                  } user-text`}
                >
                  <p className="md:text-2x; mb-6">
                    "This should be used to tell a story and include any
                    testimonial you might have product or service for your
                    clients"!
                  </p>
                  <h4 className="font-bold text-color-secondary mb-1">
                    {value.name}
                  </h4>
                  <p>{value.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
