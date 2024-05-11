import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="max-w-4xl h-full justify-center text-center items-center mx-auto">
      <h1 className="text-4xl my-10 font-bold uppercase">
        Speech to text Converter
      </h1>
      <p className="my-20 text-black">{transcript}</p>
      <span className="flex justify-center gap-10">
        {!listening ? (
          <button
            onClick={SpeechRecognition.startListening}
            disabled={listening}
            className="bg-green-500 px-4 py-2 text-white rounded-md"
          >
            Start Listening
          </button>
        ) : (
          <button
            onClick={SpeechRecognition.stopListening}
            disabled={!listening}
            className="bg-red-500 px-4 py-2 text-white rounded-md"
          >
            Stop Listening
          </button>
        )}
      </span>
    </div>
  );
};

export default SpeechToText;
