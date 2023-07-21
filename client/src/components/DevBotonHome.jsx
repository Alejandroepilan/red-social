import React from "react";
import { Link } from "react-router-dom";

export function DevBotonHome() {
  return (
    <button className="bg-cyan-400 py-2 px-4 rounded-lg">
      <Link to="/">Inicio</Link>
    </button>
  );
}
