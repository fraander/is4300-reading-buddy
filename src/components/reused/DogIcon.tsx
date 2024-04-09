import VDiv from "../utils/VDiv";
import ChatGpt from "./ChatGpt";

export default function DogIcon() {
  return (
    <VDiv className="mx-20 bg-rbp-0 ring-8 ring-rbp-500 rounded-lg shadow-lg relative h-96">
      <img className="absolute top-0 left-0 right-0 mx-auto z-20" src="/dogBackground.png" alt="background of dog image" />
      <div className="z-50">

      <ChatGpt />
      </div>
    </VDiv>
  );
}
