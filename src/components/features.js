import { SlCalender } from "react-icons/sl";
import { FaChartBar } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function Features() {
  const cardDetails = [
    {
      title: "Expense Trackering",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <SlCalender size={30} />,
    },
    {
      title: "Finance Snapshot",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <FaChartBar size={30}/>,
    },
    {
      title: "Support 24/7",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <FaPhone size={30} />,
    },
  ];
  return (
    <>
      <section id="features" className="bg-color-primary-light">
        <div className="container mx-auto py-20">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h4 className="text-color-secondary font-bold text-2xl">Our Future</h4>
            <h1 className="title">
              Easy to Manage Your All Payments By Our App
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            {cardDetails.map((detail) => (
              <div className="border-2 border-solid border-color-grey text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-300">
                <div className="bg-color-secondary inline-block rounded-2xl py-5 px-6">
                  {detail.icon}
                </div>
                <h3 className="text-xl font-bold py-4">{detail.title}</h3>
                <p className="leading-relaxed">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
