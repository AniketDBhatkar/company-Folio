const Contact = () => (
  <section id="contact" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Contact Us</h2>
    <form className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <input type="text" placeholder="Name" className="w-full border p-3 rounded-md" />
      <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
      <textarea placeholder="Message" rows="4" className="w-full border p-3 rounded-md"></textarea>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 w-full">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
