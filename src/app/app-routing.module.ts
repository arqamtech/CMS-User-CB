import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { CategoryComponent } from './Main/category/category.component';
import { TagComponent } from './Main/tag/tag.component';
import { PostComponent } from './Main/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'tag/:id', component: TagComponent },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
