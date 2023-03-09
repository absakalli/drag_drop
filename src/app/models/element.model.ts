export class _Element {
  public id: any;
  public pageId: any;
  public tip: any;
  public top: any;
  public left: any;
  public text: any;
  public font: any;
  public punto: any;
  public textWeight: any;
  public textStyle: any;
  public textDecor: any;
  public textTop: any;
  public textLeft: any;
  public textRight: any;
  public textBottom: any;
  public textColor: any;
  public layer: any;
  public height: any;
  public width: any;
  public textLoc: any;
  public bgColor: any;
  public bgUrl: any;
  public bg: any;

  constructor(
    id: any,
    widthD: any,
    heightD: any,
    bgUrlD: any,
    layer: any,
    bgColorD: any,
    top: any,
    left: any
  ) {
    this.id = id;
    this.width = widthD;
    this.height = heightD;
    this.top = top;
    this.left = left;
    this.bgUrl = bgUrlD;
    this.layer = layer;
    this.bgColor = bgColorD;
    this.textLoc = 'Orta';
    this.text = 'Drag & Drop';
    this.tip = 'Yazi';
    this.bg = 'color';
    this.punto = 25;
    this.font = 'Arial';
    this.textWeight = '';
    this.textStyle = '';
    this.textDecor = '';
    this.textTop = null;
    this.textBottom = null;
    this.textLeft = null;
    this.textRight = null;
    this.textColor = '#ffffff';
  }
}
