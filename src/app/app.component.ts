import { Component, ViewChild } from '@angular/core';
import { CrudService } from './crud.service';
import { Crud } from 'src/crud';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private crudService : CrudService) { }

  @ViewChild('myForm', {static: true})
  myForm : NgForm;
  objects : Crud [];
  object : Crud;
  ngOnInit() {
    this.objects = [];
    this.object = new Crud();
    this.getAll();
  }

  getAll() {
    this.crudService.getAll().subscribe(
      data => this.objects = data
    );
  }

  salvarDado(){
    if(!this.object.id){
      this.object.id = (new Date).getTime();
      this.crudService.save(this.object).subscribe(
        data => this.getAll()
      );
    }else{
      this.crudService.edit(this.object).subscribe(
        data => this.getAll()
      );
    }

    this.myForm.reset();

  }

  editar(crud : Crud){
      this.object = new Crud(crud.id, crud.title, crud.author);
  }
  excluir(crud : Crud){
      this.crudService.delete(crud).subscribe(
        data => this.getAll()
      );
  }
}
