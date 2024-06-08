import React, { useEffect } from "react";

const CalendlyEmbed = ({ url } : {url : string}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("style", "background-color: #24273C")
    head && head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ height: "800px", width: "100%" ,background: '#24273C'}}
    ></div>
  );
};

export default CalendlyEmbed;