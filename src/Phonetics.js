import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <em>/ {props.phonetic.text} /</em>
    </div>
  );
}
