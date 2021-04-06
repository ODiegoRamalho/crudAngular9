import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input('myForEm') numbers: number[];
  @Input( 'myForUsando') texto: string[];

  constructor() {}

  ngOnInit(): void {
    
  }
}