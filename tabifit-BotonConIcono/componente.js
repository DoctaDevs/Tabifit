class BotonConIcono extends HTMLElement {
    constructor(){
        super()
        cargarTemplate("#tabifit-botonconiconoizquierdo", this)
    }
}
customElements.define("tabifit-botonconiconoizquierdo", BotonConIcono)
class BotonConIcono extends HTMLElement {
    constructor(){
        super()
        cargarTemplate("#tabifit-botonconiconoderecho", this)
    }
}
customElements.define("tabifit-botonconiconoderecho", BotonConIcono)
// o
// class BotonConIcono extends HTMLElement {
//    constructor(){
//        super()
//        cargarTemplate("#tabifit-botonconiconoizquierdo", this)
//    }
//}
//customElements.define("tabifit-botonconiconoizquierdo", "tabifit-botonconiconoderecho", BotonConIcono)