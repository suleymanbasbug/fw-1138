import Page1Design from 'generated/pages/page1';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import { i18n } from '@smartface/i18n';
import FlexLayout from '@smartface/native/ui/flexlayout';
import Color from '@smartface/native/ui/color';
import Permission from '@smartface/native/device/permission';

class StyleableLabel extends styleableComponentMixin(Label) {}

export default class Page1 extends Page1Design {
  private disposeables: (() => void)[] = [];
  lbl: StyleableLabel;
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.lbl = new StyleableLabel();
    console.log('[page1] constructor');
    //@ts-ignore
    
  }

  setTexts() {
    this.btnNext.text = i18n.instance.t('nextPage');
    this.lbl.text = i18n.instance.t('runtimeLabel');
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    console.log('[page1] onShow');
    this.disposeables.push(
      this.btnNext.on('press', () => {
        this.router.push('page2', { message: i18n.instance.t('helloWorld') });
      })
    );

    // const flHeader = new FlexLayout({
    //     height: 10,
    //     width:10
    // });
    // flHeader.backgroundColor = Color.RED;
    // this.headerBar.layout = flHeader;
  }

  
  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    this.setTexts();
    console.log('[page1] onLoad');
    this.headerBar.leftItemEnabled = false;
    this.addChild(this.lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
      return { ...userProps };
    });
    
    this.flHeaderbar_1.maxHeight = 10;
   
  }

  onHide(): void {
    this.dispose();
  }

  dispose(): void {
    this.disposeables.forEach((item) => item());
  }
}
