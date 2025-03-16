import { Component,xml } from "@odoo/owl";

export class Child extends Component{
  static template = xml`
    <h4>That Is Child Component</h4>
  `
}

export class Root extends Component {
  // static template = "Root";
  static template = xml`
    <h2>Welcome From OWL!</h2>
    <Child/>
  `

  static components = {Child};
}
