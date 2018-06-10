import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[ngx-sticky]'
})
export class NgxStickyDirective {

    private stuck: boolean = true;
    private readonly elementOffset: number = 0;
    private windowOffsetTop: number = 0;

    @Input() addClass: string;
    @Input() offSet: number = 0;
    @Input() fromParentOffset: boolean = false;

    constructor(private el: ElementRef, private render: Renderer2) {
        this.elementOffset = this.el.nativeElement.offsetTop;
    }

    private addSticky() {
        this.stuck = true;
        this.el.nativeElement.style.position = 'fixed';
        this.el.nativeElement.style.top = this.offSet + 'px';
        this.render.addClass(this.el.nativeElement, this.addClass);
    }

    private removeSticky() {
        this.stuck = false;
        this.el.nativeElement.style.position = '';
        this.render.removeClass(this.el.nativeElement, this.addClass);
    }

    private offsetIsDerivedFromParent() {
        return this.fromParentOffset && this.el.nativeElement.offsetParent;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {

        let offset = this.offsetIsDerivedFromParent() ? this.el.nativeElement.offsetParent.offsetTop : this.el.nativeElement.offsetTop;
        this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (this.elementOffset === 0)
            this.offSet = offset;

        if (this.stuck === false)
            this.offSet = offset;

        if ((this.windowOffsetTop + this.offSet) > this.elementOffset)
            this.addSticky();
        else this.removeSticky();
    }
}