class BotonConIcono extends HTMLElement {
    constructor(){
        super()
        cargarTemplate("#tabifit-BotonConIconoIzquierdo", this)
    }
}
customElements. define("boton-con-icono", BotonConIcono)