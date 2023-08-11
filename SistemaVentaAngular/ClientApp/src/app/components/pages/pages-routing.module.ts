import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditSaleComponent } from './credit-sale/credit-sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistorialventaComponent } from './historialventa/historialventa.component';
import { HistorialventacreditoComponent } from './historialventacredito/historialventacredito.component';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VenderComponent } from './vender/vender.component';
import { VentaCreditoReporteComponent } from './venta-credito-reporte/venta-credito-reporte.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'vender', component: VenderComponent },
      { path: 'historialventas', component: HistorialventaComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'credit-sales', component: CreditSaleComponent },
      { path: 'credit-sales-history', component: HistorialventacreditoComponent },
      { path: 'credit-sales-reportes', component: VentaCreditoReporteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
