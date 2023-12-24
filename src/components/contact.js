export default function Contact() {
  return (
    <section className="bg-color-primary-light">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center md:w-1/2 mx-auto">
          <h4 className="font-bold text-color-secondary tracking-wider mb-4">
            Have A Question
          </h4>
          <h1 className="title">Get In Touch</h1>
        </div>

        <form className="py-10">
          <div className="w-full m-auto text-center md:w-2/3 ">
            <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Email"
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Phone"
              />
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary"
                placeholder="Company"
              />
            </div>
            <textarea
              rows={4}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary mb-10"
              placeholder="Message"
            />
            <button className="bg-color-secondary font-bold rounded-lg px-10 py-4 tracking-wide hover:opacity-90 duration-200 ease-in">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
