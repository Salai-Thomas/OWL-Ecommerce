import { Component,xml } from "@odoo/owl";

export class Root extends Component {
  // static template = "Root";
  static template = xml`
    <h2>Welcome From OWL!</h2>
  `
}
