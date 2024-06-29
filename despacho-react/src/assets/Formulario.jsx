import React, { useState } from 'react'
import Select from 'react-select'


export default function Component() {

    const [selectedValue, setSelectedValue] = useState('');
    const options = [
        { value: '13,23', label: 'Multiproposito Bovino Vitalim  40 Kg' },
        { value: '7,28', label: 'Multiproposito Cerdos Vitalim 20 Kg' },
        { value: '11,46', label: 'Multiproposito Convaca N15 35 Kg' },
        { value: '13,24', label: 'Multiproposito Convaca N15 Plus 35 Kg' }
    ];
    return (
        <div>
            <h2>Bienvenido a la Agropecuaria Los Gilgares</h2>
            <h3>Mi Nombre es Victor Vizcaya y voy a ser tu vendedor</h3>
            <div>
                <form>
                    <h2>Datos del Cliente</h2>
                    <div>
                        <label> Nombre o Razón Social:  </label>
                        <input type='text' name='nombre' />
                        <label>               </label>
                        <label>Rif:  </label>
                        <input type='text' name='rif' />
                    </div>
                    <h2>Factura / Pedido</h2>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio Unitario</th>
                                    <th>Cant.</th>
                                    <th>% Ganancia</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Select
                                        value={selectedValue}
                                        onChange={(selectedOption) => setSelectedValue(selectedOption.value)}
                                        options={options}
                                    /></td>
                                    <td><input type="text" value={selectedValue} /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><input type="text" /></td>
                                    <td><button>+</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
                <p>Mas perdida no puedo estar </p>
                <p>Aquí voy</p>
            </div>
        </div >
    )
}