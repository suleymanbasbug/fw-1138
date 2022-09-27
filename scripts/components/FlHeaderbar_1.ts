import FlHeaderbar_1Design from 'generated/my-components/FlHeaderbar_1';

export default class FlHeaderbar_1 extends FlHeaderbar_1Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
