export default function SavingMoneySection() {
  return (
    <>
      <section className="container mx-auto px-5 md:px-20 relative">
        <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 opacity-30 blur-2xl rounded-full overflow-hidden"></div>
        <div className="w-80 h-80 bg-color-secondary absolute bottom-0 -right-5 opacity-30 blur-2xl rounded-full overflow-hidden"></div>

        <div className="py-20">
          <div className="flex flex-col md:flex-row items-center z-20">
            <div className="md:w-1/2">
              <img src={require("../assets/images/hero3.png")} />
            </div>
            <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
              <p className="my-4 text-color-secondary text-xl font-bold">
                Saving Money
              </p>
              <h1 className="title mb-4">
                Best Financing App To Save Your Money.
              </h1>
              <p className="leading-relaxed mb-10">
                Best financing app ever in the world. Easy to use and very user
                friendly for mobile banking. You can control your card easily
                and send money some one just one click
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
