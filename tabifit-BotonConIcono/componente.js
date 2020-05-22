class BotonConIcono extends HTMLElement {
    constructor(){
        super()
        cargarTemplate("#tabifit-botonconiconoizquierdo", this)
    }
}
customElements.define("tabifit-botonconiconoizquierdo", BotonConIcono)