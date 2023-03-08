import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.downloadTxtFile = this.downloadTxtFile.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  downloadTxtFile() {
    const element = document.createElement('a');
    const file = new Blob([this.state.value], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'note.txt';
    document.body.appendChild(element);
    element.click();
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.downloadTxtFile}>Save Note</button>
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
        <style>{`
          .container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 50px;
          }

          .input,
          .output {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f1f1f1;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            height: 400px;
            width: 45%;
          }

          .input h3,
          .output h3 {
            margin-bottom: 20px;
            color: #444;
          }

          .input-text {
            width: 100%;
            height: 100%;
            padding: 10px;
            border: none;
            resize: none;
          }

          button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
          }

          button:hover {
            background-color: #0069d9;
          }

          .output-text {
            width: 100%;
            height: 100%;
            padding: 10px;
            border: none;
            resize: none;
            overflow-y: auto;
            line-height: 1.5;
          }
        `}</style>
      </div>
    );
  }
}
