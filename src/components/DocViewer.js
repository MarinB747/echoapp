import React from "react";

const DocIframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
      <iframe
        src={
          "https://view.officeapps.live.com/op/embed.aspx?src=" +
          src +
          "&embedded=true"
        }
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default DocIframe;
