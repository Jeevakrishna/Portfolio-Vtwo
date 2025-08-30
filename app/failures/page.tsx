import { GridWrapper } from "@/app/components/GridWrapper";
import { TimelineItem } from "@/app/components/TimelineItem";

// This tells Next.js to not cache this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Failures | Jeevakrishna V',
  description: 'A collection of my failures and the valuable lessons learned from them.',
};

interface Failure {
  title: string;
  description: string;
  learnedFrom: string;
  date?: string;
}

const failures: Failure[] = [
  {
    title: "Hackathon Finalists",
    description: "My first ever offline hackathon! It was a 3-day event where our product got great feedback from mentors and reviewers. I was super confident on Day 1 and 2, but I completely messed up the final presentation, nerves hit me hard. Instead of winning, we landed as finalists.",
    learnedFrom: "Improving how I speak in front of people, staying calm, and building self-confidence.",
    date: "2023"
  },
  {
    title: "Backlogs",
    description: "In my 2nd semester, I ended up with 5 backlogs. The jump from school to university exams was tough, I didn't manage my time well and ignored internal tests. By finals, I was stressed and anxious, which made things worse.",
    learnedFrom: "Making proper schedules for every task to stay calm, reduce anxiety, and stay focused.",
    date: "2022"
  },
  {
    title: "Football Match Incident",
    description: "In my 3rd year, we had a quarterfinal football match against seniors. Some misunderstanding during the game led to a fight, and I lost my cool even though it wasn't my fault. We almost lost the match because of my temper.",
    learnedFrom: "Staying calm under pressure because in the end, calm always wins.",
    date: "2023"
  },
  {
    title: "Media Player Project",
    description: "As a kid, I loved VLC media player, so I tried making my own version using Electron and CMake. I hit a lot of errors and couldn't finish it yet, but building something I've always admired was fun.",
    learnedFrom: "Trying new tech even when it's not easy, failing, learning, and repeating the process.",
    date: "2022"
  },
  {
    title: "Physics Exam Overconfidence",
    description: "Physics was always my favorite subject, so in Grade 12 I thought I had it covered. I got overconfident, didn't prepare properly, and ended up with lower marks than expected.",
    learnedFrom: "Ego and overconfidence are the fastest way to mess things up.",
    date: "2021"
  },
  {
    title: "Switch Game Launch",
    description: "I built a hyper-casual game called Switch for people aged 20-65 to help reduce stress and improve focus. The launch didn't blow up — only around 100+ downloads.",
    learnedFrom: "Planning strategically and executing well is what gets real results.",
    date: "2023"
  },
  {
    title: "Unlaunched Side Projects",
    description: "Not every idea makes it to launch and that's okay. I've tried building many things just to explore tools, test concepts, and level up my skills.",
    learnedFrom: "Exploring new tools, solving tricky problems, and building smarter solutions while sharpening creative and dev skills.",
    date: "Ongoing"
  },
];

export default function FailuresPage() {
  return (
    <div className="relative">
      <div className="relative space-y-16">
        <GridWrapper>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="mt-16 text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl md:leading-tight">
              Growth through the things that didn&apos;t work
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Every failure is a stepping stone to success. Here are some of my most valuable lessons learned the hard way.
            </p>
          </div>
        </GridWrapper>

        <GridWrapper className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-200 to-transparent" />
              <div className="space-y-12">
                {failures.map((failure, index) => (
                  <TimelineItem
                    key={failure.title}
                    title={failure.title}
                    description={failure.description}
                    learnedFrom={failure.learnedFrom}
                    isLast={index === failures.length - 1}
                    date={failure.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>

        <GridWrapper className="pb-24">
          <div className="bg-bg-primary/50 py-16">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <h2 className="text-2xl font-medium text-text-primary sm:text-3xl">
                More to come...
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                I&apos;m sure there will be more failures to add to this page in the
                future. I&apos;ll keep updating it as I go.
              </p>
            </div>
          </div>
        </GridWrapper>
      </div>
    </div>
  );
}
