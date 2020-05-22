class EjercicioActual extends HTMLElement {
    constructor() {
        super();
        cargarTemplate("#ejercicio-actual", this);
}
}
customElements.define("ejercicio-actual", EjercicioActual);