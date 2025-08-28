import React from "react";

const SlidoIframe = () => (
  <div style={{ width: "100%", minHeight: "560px", margin: "32px 0" }}>
    <h3 >Post your questions!!</h3>
    <p >This slido view will be used to gather questions before the panel. Please submit questions in advance!!</p>
    <iframe
      src="https://app.sli.do/event/wMRG1eUcRMrokqsGYqHBcM"
      height="100%"
      width="100%"
      frameBorder="0"
      style={{ minHeight: "560px" }}
      allow="clipboard-write"
      title="Slido"
    ></iframe>
  </div>
);

export default SlidoIframe;
