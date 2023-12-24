import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      <section id="pricing" className="bg-color-primary-light">
        <div className="container mx-auto py-20">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h4 className="font-bold text-color-secondary mb-4">Pricing</h4>
            <h1 className="title">Get In Reasonable Price</h1>

            {/* Rounded Switch */}
            <div className="mt-5 flex items--center justify-center gap-4">
              <p>Bill Monthly</p>
              <label className="relative inline-block w-20 h-8 rounded-full">
                <input
                  type="checkbox"
                  className="peer opacity-0 w-0 h-0"
                  onChange={(value) => setIsMonthly(!isMonthly)}
                />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-grey rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
              </label>
              <p>Bill Annually</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="card relative h-auto w-auto">
              <div
                id="card_1_front"
                className={`${
                  isMonthly ? "-rotate-y-180" : ""
                } front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    20
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
              <div
                id="card_1_back"
                className={`${
                  isMonthly ? "" : "rotate-y-180"
                } back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute left-0 top-0`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    500
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
            </div>
            <div className="card relative h-auto w-auto">
              <div
                id="card_1_front"
                className={`${
                  isMonthly ? "-rotate-y-180" : ""
                } front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    50
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
              <div
                id="card_1_back"
                className={`${
                  isMonthly ? "" : "rotate-y-180"
                } back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute left-0 top-0`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    100
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
            </div>
            <div className="card relative h-auto w-auto">
              <div
                id="card_1_front"
                className={`${
                  isMonthly ? "-rotate-y-180" : ""
                } front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    100
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
              <div
                id="card_1_back"
                className={`${
                  isMonthly ? "" : "rotate-y-180"
                } back px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute left-0 top-0`}
              >
                <div className="relative">
                  <p className="text-6xl pl-2 font-bold before:content-['$'] before:text-sm before:absolute before:top-0 before:left-0">
                    2000
                    <span className="text-sm font-normal tracking-widest">
                      /per month
                    </span>
                  </p>
                </div>

                <div className="py-10">
                  <h3 className="text-xl font-bold pb-3">Basic</h3>
                  <p className="leading-relaxed">
                    For Beginner Who Want To Scale Business Globally
                  </p>
                </div>

                <ul className="space-y-4 pb-10">
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Expense Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-secondary" />
                    <span className="pl-4">Card Management</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Instant Statistics</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Bookmark Function</span>
                  </li>
                  <li className="flex flex-row items-center justify-start">
                    <FaBookmark className="text-color-grey" />
                    <span className="pl-4">Accounting System</span>
                  </li>
                </ul>

                <button className="card_button">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
