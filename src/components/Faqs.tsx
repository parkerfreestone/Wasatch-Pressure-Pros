import { HelpCircle } from "lucide-react";

const questions = [
  {
    question: "What is pressure washing?",
    answer:
      "Pressure washing is the use of high-pressure water spray to remove loose paint, mold, grime, dust, mud, and dirt from surfaces and objects like buildings, vehicles, and concrete surfaces.",
  },
  {
    question: "Why is pressure washing important?",
    answer:
      "Pressure washing is a great way to maintain and enhance the look of your property. It can also prevent damage caused by the buildup of things like mold and algae.",
  },
  {
    question: "How often should I have my property pressure washed?",
    answer:
      "The frequency can depend on local conditions, but as a general rule, it's a good idea to have your property pressure washed when you notice accumulation of dirt, mold, or other substances. We can provide personalized advice based on the specifics of your property.",
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer:
      "Not all surfaces are suited for pressure washing. Soft or delicate surfaces may be damaged by the high pressure. Our technicians are trained to evaluate each situation and adjust their techniques as needed.",
  },
  {
    question: "Is your business licensed and insured?",
    answer:
      "Yes, our business is fully licensed and insured. We can provide proof of insurance upon request.",
  },
  {
    question: "How long does a pressure washing service take?",
    answer:
      "The length of the service can vary depending on the size of the area to be cleaned. An average-sized home typically takes between 2-3 hours.",
  },
];

export const Faqs = () => {
  return (
    <section id="faqs" className="bg-zinc-100">
      <div className="pt-52 pb-24 mx-4 lg:mx-16 -mt-16 z-10">
        <div className="text-center">
          <p className="text-xl font-bold text-zinc-400">FAQ'S</p>
          <h2 className="text-5xl font-bold mb-16">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid gap-4 lg:gap-12 grid-cols-1 lg:grid-cols-2">
          {questions.map(({ question, answer }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={50 * index}
              className="flex flex-col lg:flex-row justify-between gap-12 p-12 bg-white rounded-xl"
            >
              <HelpCircle size={32} />
              <div className="flex-1">
                <h3 className="font-bold text-zinc-800 text-2xl mb-6">
                  {question}
                </h3>
                <p className="text-xl text-zinc-600">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
