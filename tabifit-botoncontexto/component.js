class TabifitBotonConTexto extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#tabifit-botoncontexto", this);
    }
}

customElements.define("tabifit-botoncontexto", TabifitBotonConTexto);