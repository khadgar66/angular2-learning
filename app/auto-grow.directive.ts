import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector:'[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)':'onBlure()'
    }
})

export class AutoGrowDirective{
    constructor(private el: ElementRef,private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.el, 'width', '200')

    }

    onBlur(){
        this.renderer.setElementStyle(this.el, 'width', '100')
    }
}