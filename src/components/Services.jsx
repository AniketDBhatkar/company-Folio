const Services = () => {
  const services = [
    { title: "Web Development", desc: "Modern, fast, and responsive web solutions." },
    { title: "UI/UX Design", desc: "Crafting beautiful and intuitive user experiences." },
    { title: "Digital Marketing", desc: "Helping your brand reach new heights online." },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
