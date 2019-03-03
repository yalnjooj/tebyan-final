import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/home/minaccount/body/body.component';
import { FooterComponent } from './components/home/minaccount/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/minaccount/navbar/navbar.component';
import { GeneratepwdComponent } from './components/generatepwd/generatepwd.component';
// import { TeachersComponent } from './components/courses/teachers/teachers.component';
import { CertificatasComponent } from './components/home/minaccount/pages/certificatas/certificatas.component';
import { AccountsComponent } from './components/home/minaccount/pages/accounts/accounts.component';
import { CoursesComponent } from './components/home/minaccount/pages/courses/courses.component';
import { MinComponent } from './components/accounts/subaccounts/min/min.component';
import { SubnavbarComponent } from './components/accounts/subaccounts/subnavbar/subnavbar.component';
import { SubbodyComponent } from './components/accounts/subaccounts/subbody/subbody.component';
// import { SubfooterComponent } from './components/accounts/subaccounts/subfooter/subfooter.component';
import { SubordersComponent } from './components/accounts/subaccounts/pages/suborders/suborders.component';
import { SubcoursesComponent } from './components/accounts/subaccounts/pages/subcourses/subcourses.component';
import { SubcertificatesComponent } from './components/accounts/subaccounts/pages/subcertificates/subcertificates.component';
import { OrdersComponent } from './components/home/minaccount/pages/orders/orders.component';
import { ReportsComponent } from './components/home/minaccount/pages/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    GeneratepwdComponent,
    // TeachersComponent,
    CertificatasComponent,
    AccountsComponent,
    CoursesComponent,
    MinComponent,
    SubnavbarComponent,
    SubbodyComponent,
    SubcoursesComponent,
    // SubfooterComponent,
    SubordersComponent,
    SubcertificatesComponent,
    OrdersComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
