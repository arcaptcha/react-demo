import { ArcaptchaWidget } from "arcaptcha-react";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.ArRef = React.createRef();
    this.executeArcaptcha = this.executeArcaptcha.bind(this);
    this.resetArcaptcha = this.resetArcaptcha.bind(this);
  }
  getToken = (token) => {
    // console.log(token);
    //do something with your token.
  };
  checkCallback() {
    console.log("widget is rendered");
  }
  executeArcaptcha() {
    console.log("loading....")
    this.ArRef.current.execute()
  }
  resetArcaptcha() {
    console.log("reset")
    this.ArRef.current.resetCaptcha()
  }
  render() {
    return (
      <div>
        <div>
          <br/>
          invisible captcha:
          <br/>
          <br/>
          <button onClick={this.executeArcaptcha}> click me </button>
          <button onClick={this.resetArcaptcha}> reset </button>
          <ArcaptchaWidget
            ref={this.ArRef}
            site-key="bdopsptc2b"
            rendered_callback={this.checkCallback}
            invisible="true" //for invisible captcha
            color="pink" //it's not required.
            theme="dark" //it's not required. Default is light
            lang="en" //it's not required. Default is fa
          />
        </div>

        <br/>
        <br/>
        <br/>

        visible captcha:
        <br/>
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key="bdopsptc2b"
        />
      </div>
    );
  }
}

export default App;
