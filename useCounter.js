import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        // setCounter(counter + value);

        // ocupo este pq me sirve para la sección de pruebas, ya que permite llamar al increment 2 veces seguidas
        // y actualizar el valor del counter luego de esas 2 ejecuciones
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;

        // setCounter(counter - value);

        // ocupo este pq me sirve para la sección de pruebas, ya que permite llamar al decrement 2 veces seguidas
        // y actualizar el valor del counter luego de esas 2 ejecuciones
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }
 
    return  {
        counter,
        increment,
        decrement,
        reset
    }
}