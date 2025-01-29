import Sidebar from "../components/sidebar";

export default function Responsible() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="flex w-full md:w-1/2 py-16">
        <Sidebar />
        <main className="flex-1 p-0 md:p-0 w-full md:pl-0 border-l border-neutral-700 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 pt-2">Responsible Use of AI</h1>
          <p className="text-2xl px-4 pt-2">When you’re working on a project, especially in a free course, the goal isn’t just to finish—it’s to grow. If you let AI do all the work, you’re missing out on the chance to challenge yourself and actually learn. The real reward comes from putting in the effort, not just getting the result. Using AI to skip steps might save time, but it won’t help you improve your skills or understand what you’re doing.</p>
          <p className="text-2xl px-4 my-4">Instead of asking AI to do everything for you, use it to learn why things work the way they do. For example, instead of having it write code, ask it to explain how the code works. This way, you’re focusing on understanding the logic behind the process, not just copying and pasting. Learning the “why” is what helps you think critically and solve problems on your own.</p>
          <p className="text-2xl px-4 pb-12">Don’t let AI take over your projects completely. It’s great for help and inspiration, but if it’s doing all the work, you’re not really learning. The mistakes, the debugging, and the creative problem-solving are where the real growth happens. Keep AI as a tool, not your driver—your skills and confidence will thank you later!</p>
        </main>
      </div>
    </div>
  );
}
