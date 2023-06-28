import { HelpCircle } from "lucide-react";

const questions = [
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
  },
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
  },
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
  },
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
  },
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
  },
  {
    question: "This is a sample question?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique laboriosam atque nihil totam, quasi sunt ipsa velit quo perferendis? Officiis earum debitis qui quo dolorem soluta ipsa, libero eum beatae.",
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
          {questions.map(({ question, answer }) => (
            <div className="flex justify-between gap-12 p-12 bg-white rounded-xl">
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
