"use client";

export default function Impact() {
  const impactStats = [
    {
      title: "1,500+ Clients Reached in FCT",
      description:
        "Through community outreach, facility-based support, and targeted health interventions, we provided essential health education and services to over 1,500 individuals, improving access and outcomes.",
    },
    {
      title: "28 Healthcare Providers Trained",
      description:
        "We equipped over 28 healthcare professionals with skills in maternal, newborn, and child health, HIV prevention, and client-centered care — enhancing service quality.",
    },
    {
      title: "700+ Newborns & Children Monitored",
      description:
        "Regular follow-up, growth monitoring, and referrals helped ensure the wellbeing and survival of more than 700 children across our focus communities.",
    },
    {
      title: "73 Caregivers Empowered",
      description:
        "We trained 73 caregivers in nutrition, early childhood development, and disease prevention — helping them better support the children in their care.",
    },
  ];

  return (
    <section
      className="bg-[#F9F5EF] py-20 px-4 md:px-8 lg:px-16 font-Inter"
      id="impact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#194E6B] mb-4">Our Impact</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Measurable change, real lives transformed. Here&apos;s how we&apos;re making a
          difference.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {impactStats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 transition hover:shadow-md border-l-4 border-[#3C8A4E]"
          >
            <h3 className="text-xl font-semibold text-[#3C8A4E] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
