import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <em>/ {props.phonetic.text} /</em>
    </div>
  );
}
