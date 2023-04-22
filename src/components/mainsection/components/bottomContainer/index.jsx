import { BsSend } from "react-icons/bs";
export default function BottomContainer({onSubmit}) {
  return (
    <div className="absolute bottom-0 flex w-full left-0 h-36 bg-gradient-to-b from-transparent to-gray-700 items-center justify-center">
      <div className="h-max rounded overflow-hidden w-3/5 shadow-lg flex bg-gray-600">
        <input
          className="h-max w-full px-5 py-3 bg-inherit focus:outline-none text-white"
          placeholder="Type a message..."
          onKeyPress={(event) => {
            if (event.key === "Enter") {
                const message = event.target.value
              event.preventDefault();
              console.log(message);
              onSubmit(message)
              event.target.value = "";
            }
          }}
        />
        <div className="aspect-square w-12 bg-inherit flex items-center justify-center">
          <BsSend className="text-gray-400 -translate-x-2" />
        </div>
      </div>
    </div>
  );
}
