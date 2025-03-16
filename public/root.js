import { Component,xml } from "@odoo/owl";

export class ComponentA extends Component{
  static template = xml`
    <h4>That Is Child Component A</h4>
  `
}

export class ComponentB extends Component{
  static template = xml`
    <h4>That Is Child Component B</h4>
  `
}

export class Root extends Component {
  // static template = "Root";
  static template = xml`
    <h2>Welcome From OWL!</h2>
    <t t-component='getComponent'/>
  `

  static components = {ComponentA,ComponentB};
  value = 11
  get getComponent(){
    return this.value == 11 ? ComponentA:ComponentB
  }
}
