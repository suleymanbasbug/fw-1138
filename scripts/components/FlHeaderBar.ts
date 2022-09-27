import FlHeaderBarDesign from 'generated/my-components/FlHeaderBar';

export default class FlHeaderBar extends FlHeaderBarDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
