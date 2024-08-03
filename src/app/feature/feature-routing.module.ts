import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatueComponent } from './feature.component';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';

const routes: Routes = [
  {
    path:'',component:FeatueComponent,children:[
      {
        path:"home",component:HomeComponent,
        
      },
      {
        path:"seller-auth",component:SellerAuthComponent,
        
      },
      {
        path:'',redirectTo:'home',pathMatch:'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
