const Portfolio = () => {
  const projects = [
    { name: "Project A", desc: "Corporate Website for client A" },
    { name: "Project B", desc: "E-commerce platform for client B" },
    { name: "Project C", desc: "Branding and design for client C" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-blue-700 mb-10">Our Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <div key={i} className="shadow-md rounded-xl p-6 hover:shadow-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
