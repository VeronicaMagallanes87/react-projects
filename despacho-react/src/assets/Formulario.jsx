import React from 'react'
import { useState } from 'react';


export default function Component() {

    const [selectedValue, setSelectedValue] = useState(0);
    const options = [
        { value: '13.23', label: 'Multiproposito Bovino Vitalim  40 Kg' },
        { value: '7.28', label: 'Multiproposito Cerdos Vitalim 20 Kg' },
        { value: '11.46', label: 'Multiproposito Convaca N15 35 Kg' },
        { value: '13.24', label: 'Multiproposito Convaca N15 Plus 35 Kg' }
    ];

    const [num1, setNum1] = useState(0);

    const handleNum1Change = (event) => {
        setNum1(parseInt(event.target.value));
    };

    const product = selectedValue * num1;
    const product1 = (selectedValue * 0.01) * num1;

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
                                    <th>Total</th>
                                    <th>% Ganancia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{<select id='producto'
                                        value={selectedValue}
                                        onChange={e => setSelectedValue(e.target.value)}
                                    >
                                        {options.map((opt, index) => (
                                            <option value={opt.value} key={index}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>}
                                    </td>
                                    <td><input type="int" id='precio' value={selectedValue} /></td>
                                    <td><input type="int" id='cantidad' value={num1} onChange={handleNum1Change} /></td>
                                    <td><input type="int" id='total' value={product} /></td>
                                    <td><input type="int" id='ganancia' value={product1} /></td>
                                    <td><button type="button" id="add">+</button></td>
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