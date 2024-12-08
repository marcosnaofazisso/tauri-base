import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [progress, setProgress] = useState(0); // State to track the progress value
  const name = "Marquinhos"

  async function greet(e) {
    e.preventDefault()
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    const response = await invoke("greet", { name })
    alert(response)
  }

  const handleFunction = () => {
    alert("My first function!")
  }

  const startDownload = async () => {
    try {
      console.log("Tauri API invoke is:", invoke); // Add this line to check if 'invoke' is defined.
      await invoke("download", { url: "https://example.com/file.zip" });
      console.log("Download initiated.");
    } catch (error) {
      console.error("Error invoking download:", error);
    }
  };

  useEffect(() => {
    const setupListener = async () => {
      const unlisten = await listen("download-progress", (event) => {
        const progressValue = event.payload.progress;
        if (progressValue !== undefined) {
          setProgress(progressValue);
        }
      });

      // Retorne a função de descarte
      return unlisten;
    };

    // Chame a função e gerencie o cleanup
    const cleanup = setupListener();

    // Função de cleanup
    return () => {
      cleanup.then((unlistenFn) => unlistenFn());
    };
  }, []);


  return (
    <main>
      <h1>Hello world!</h1>
      <button onClick={(e) => greet(e)}>Greet me!</button>
      <button onClick={() => handleFunction()}>My first function!</button>
      <button onClick={startDownload}>Iniciar Download</button>
      <div>
        <h2>Download Progress: {progress}%</h2>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "20px",
              width: `${progress}%`,
              backgroundColor: "#76c7c0",
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}