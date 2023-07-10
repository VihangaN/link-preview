import { useRef, useState } from "react";
import { extractMeta } from "@/util/extractMeta";

export default function Home() {
  const inputRef = useRef();
  const [meta, setMeta] = useState();
  const getMeta = async () => {
    const url = inputRef.current?.value;
    const res = await fetch("http://localhost:3000/api/getPreview", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
    const meta = await res.json();
    setMeta(extractMeta(meta));
  };

  return (
    <div className={`meta-preview ${!meta ? "placeholder" : ""}`}>
      <div className="meta">
        <div className="img">
          <img src={meta?.metaImg} />
        </div>
        <div className="title">{meta?.metaTitle}</div>
        <div className="des">{meta?.metaDes}</div>
        <a className="url" href={inputRef?.current?.value}>
          {inputRef?.current?.value}
        </a>
      </div>
      <div className="inputBase">
        <input type="text" ref={inputRef}></input>
        <button onClick={() => getMeta()}>preview</button>
      </div>
    </div>
  );
}
