import React from 'react'
import { useState } from 'react';

export default function Component() {

    const [selectedValue, setSelectedValue] = useState('');

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
                                    <td><select
                                        value={selectedValue}
                                        onChange={e => setSelectedValue(e.target.value)}
                                    >
                                        <option value="13,23">Multiproposito Bovino Vitalim  40 Kg</option>
                                        <option value="7,28">Multiproposito Cerdos Vitalim 20 Kg</option>
                                        <option value="11,46">Multiproposito Convaca N15 35 Kg </option>
                                        <option value="13,24">Multiproposito Convaca N15 Plus 35 Kg </option>
                                    </select>
                                    </td>
                                    <td><input type="int" value={selectedValue} /></td>
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