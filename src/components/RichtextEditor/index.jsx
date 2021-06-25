import React, { useEffect } from "react";
import './module.style.css';

const RichTextEditor = () => {

  useEffect(() => {

    const buttonClick = (btn) => {
      let cmd = btn.dataset['command'];
      if(cmd === 'fontSize') {
        let font = prompt("Enter the size here: ", "");
        document.execCommand(cmd, false, font);
      } else if (cmd === "foreColor") {
        let color = prompt("Enter font color here", "");
        document.execCommand(cmd, false, color);
      } else {
        document.execCommand(cmd, false, null);
      }		
    };
    
    let buttons = document.getElementsByClassName('tool--btn');
    for (let btn of buttons) {
      btn.addEventListener('click', () => buttonClick(btn));
    }
    
    let output = document.getElementById('output');
    console.log(output);

    return () => {
      for (let btn of buttons) {
        btn.removeEventListener('click', () => buttonClick(btn));
      }
    }
  }, []);
  return (
    <div className="container">
      <div className="toolbar">
        <ul className="tool-list">
          
          <li className="tool">
            <button type="button" data-command="bold" className="tool--btn">
              Bold
            </button>
          </li>
          <li className="tool">
            <button type="button" data-command="italic" className="tool--btn">
              Italic
            </button>
          </li>
          <li className="tool">
            <button type="button" data-command="underline" className="tool--btn">
              Underline
            </button>
          </li>
         
          <li className="tool">
            <button
              type="button"
              data-command="insertUnorderedList"
              className="tool--btn"
            >
              List
            </button>
          </li>
          <li className="tool">
            <button type="button" data-command="fontSize" className="tool--btn input">
              Font size (px)
            </button>
          </li>
          <li className="tool">
          <button type="button" data-command="foreColor" className="tool--btn input">
              Hex Color Code (px)
            </button>
          </li>
        </ul>
      </div>

      <div id="output" contenteditable="true"></div>
    </div>
  );
};

export default RichTextEditor;
