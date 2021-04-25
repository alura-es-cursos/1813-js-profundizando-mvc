class VentasView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        console.log(model);
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Valor</th>
                <th>Total</th>
            </tr>
        </thead>
        
        <tbody>
        ${
            model.listaVentas.map(n =>`
            <tr>
                <td>${FechaHelper.fechaParaTexto(n.fecha)}</td>
                <td>${n.cantidad}</td>
                <td>${n.valor}</td>
                <td>${n.totalventa}</td>
            </tr>
            `).join('')
        }
        </tbody>
        
        <tfoot>
            <tr>
                <td colspan="3">&nbsp;</td>
                <td>${
                model.listaVentas.reduce((total,n) =>total+n.totalventa,0.0)
                }</td>
            </tr>
        </tfoot>
    </table>
        `;
    }


}