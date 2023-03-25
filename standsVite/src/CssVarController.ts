export default class CssVarController {
  // Get the root element
  private r = document.querySelector(":root")! as HTMLElement;
  private variable;

  constructor(name: string) {
    this.variable = name;
  }

  // Create a function for getting a variable value
  public get() {
    if (typeof this.variable === undefined) return "no such variable";
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(this.r);
    return rs.getPropertyValue(this.variable);
  }

  // Create a function for setting a variable value
  public set(newValue: string | undefined | null) {
    if (typeof newValue === undefined) {
      this.r.style.setProperty(this.variable, "");
    } else {
      this.r.style.setProperty(this.variable, newValue!);
    }
  }
}
