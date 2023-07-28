const ContactPage = () => {
  return (
    <section id="contact" className="pb-16 pt-32 lg:pb-28">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-secondary mb-2">Contact Me</h4>
            <h2 className="font-bold text-primary text-3xl mb-4 lg:text-3xl">Get In Touch</h2>
            <p className="font-medium font-mono text-slate-500 md:text-lg">Don't hesitate to contact me, I accept feedback and suggestions for a further project ideas.</p>
          </div>
        </div>
        <form action="https://formspree.io/f/mzbobvkw" method="POST" target="blank">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base text-primary font-bold">
                Name
              </label>
              <input type="text" id="name" name="nama" className="w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3" required />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base text-primary font-bold">
                Email
              </label>
              <input type="email" id="email" name="_replyto" className="w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3" required />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base text-primary font-bold">
                Message
              </label>
              <textarea id="name" name="message" className="w-full bg-white border-2 border-[#030723] bayangan_field focus:outline-none focus:ring focus:ring-blue-500 p-3 h-32" required />
            </div>
            <div className="w-full px-4">
              <button
                type="submit"
                className="w-full btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
