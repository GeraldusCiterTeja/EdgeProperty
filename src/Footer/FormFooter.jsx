import React from "react";

function FormFooter() {
  return (
    <div className="formAll">
      <h3>REACH US</h3>
      <h3>ENTER YOUR EMAIL ADDRESS</h3>
      <form action="mailto:duateja@gmail.com" method="post" encType="text/plain" className="formFooter">
        <input type="email" placeholder="Email"></input>
        <button type="submit">Sent Email</button>
      </form>
    </div>
  );
}

export default FormFooter;
