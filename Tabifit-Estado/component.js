class Estado extends HTMLElement {	
    constructor(){	
        super();	
        cargarTemplate("#tabifit-estado", this);	
    }	
}	
customElements.define("tabifit-estado", Estado);