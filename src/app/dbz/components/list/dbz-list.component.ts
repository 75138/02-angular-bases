import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from "../../interfaces/icharacter";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {
  constructor(private decimalPipe:DecimalPipe) {}

  @Input()
  public characterList :ICharacter[] = []

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id:string ):void {
    this.onDeleteId.emit(id)
  }
}
