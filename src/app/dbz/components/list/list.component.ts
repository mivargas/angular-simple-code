import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [ //por defecto si el padre no envia nada se mostraara este de lo contrario al padre enviar algo omitira este
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  /* onDeleteCharacter(index: number): void {
    //console.log('delete: ', index)
    this.onDelete.emit(index);

  } */


  onDeleteCharacter(id?: string): void {
    if (!id) return; //validacion necesaria si decimos que el parametro es opcional (explicacion extendida en el list component)
    //console.log('delete: ', index)
    this.onDelete.emit(id);

  }
}
