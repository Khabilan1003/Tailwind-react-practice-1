export default function HowItWorks() {
  return (
    <>
      <section className="bg-color-primary-light">
        <div className="container mx-auto py-20 lg:px-6">
          <div className="text-center m-auto mb-20 md:w-1/2">
            <h4 className="text-color-secondary font-bold text-2xl">
              How It Works
            </h4>
            <h1 className="title">Grow Up Your Money Saving</h1>
          </div>
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="text-center py-20 px-5 rounded-2xl">
              <div className="bg-color-primary-dark text-3xl inline-block rounded-2xl py-3 px-6 hover:bg-color-secondary ease-in duration-300">
                1
              </div>
              <h3 className="text-xl font-bold py-4">Install The App</h3>
              <p className="leading-relaxed">
                We use an application designed a testing gnose to keep away
              </p>
            </div>

            <div className="text-center py-20 px-5 rounded-2xl">
              <div className="bg-color-secondary text-3xl inline-block rounded-2xl py-3 px-6">
                2
              </div>
              <h3 className="text-xl font-bold py-4">Setup Your Profile</h3>
              <p className="leading-relaxed">
                We use an application designed a tesing gnose to keep away
              </p>
            </div>

            <div className="text-center py-20 px-5 rounded-2xl">
              <div className="bg-color-primary-dark text-3xl inline-block rounded-2xl py-3 px-6 hover:bg-color-secondary ease-in duration-300">
                3
              </div>
              <h3 className="text-xl font-bold py-4">Enjoy The Featues!</h3>
              <p className="leading-relaxed">
                We use an application designed a tesing gnose to keep away
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
