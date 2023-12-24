export default function Home() {
  return (
    <>
      <section id="home" className="container mx-auto px-5 md:px-20 relative">
        <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 opacity-30 blur-2xl rounded-full overflow-hidden"></div>
        <div className="w-80 h-80 bg-color-secondary absolute bottom-0 -right-5 opacity-30 blur-2xl rounded-full overflow-hidden"></div>

        <div className="py-20">
          <div className="flex flex-col md:flex-row items-center z-20">
            <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
              <h1 className="title mb-4">
                Awesome App for Your Financial.
              </h1>
              <p className="leading-relaxed mb-10">
                This should be used to tell a story and let your users know a
                little more about app and it’s use, How can benefit them.
              </p>
              <button className="btn">Download app</button>
            </div>
            <div className="md:w-1/2">
              <img src={require("../assets/images/hero4.png")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
