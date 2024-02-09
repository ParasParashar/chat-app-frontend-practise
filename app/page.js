import Chatinput from "../Components/Chatinput";
import MessageArea from "../Components/MessageArea";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <section className="flex items-center justify-center flex-col gap-3 rounded-xl w-3/4 bg-blue-950 p-2 h-[700px]">
        <h1 className="text-xl font-bold text ">Socket IO</h1>
        <MessageArea />
        <Chatinput />
      </section>
    </main>
  );
}
