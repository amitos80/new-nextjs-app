import React, { Component } from 'react';
import TypeWriter from './typewriter/TypeWriter';

export default class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    }
  }

  onTypedChar (token, visibleChars) {
    const { onStart, onEnd, text } = this.props;
    const { started } = this.state;
    if (visibleChars === text.length - 1) {
      onEnd();
    }
    if (!started && !this.typing) {
      this.typing = true;
      this.setState({ started: true })
      onStart();
    }
  }

  render() {
    const { text, minSpeed = 40, maxSpeed = 60 } = this.props;
    return (
      <div className="type-container">
        <TypeWriter
          minDelay={minSpeed}
          maxDelay={maxSpeed}
          initDelay={400}
          typing={1}
          fixed={true}
          onTyped={this.onTypedChar.bind(this)} >
          {text}
        </TypeWriter>
        <style jsx>{`
        .type-container {
          pointer-events: all;
          width: 100%;
          height: 100%;
        }
      `}</style>
      </div>
    );
  }
}
