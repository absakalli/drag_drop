export class _Element {
  public id: any;
  public tip: any;
  public top: any;
  public left: any;
  public span: any;
  public font: any;
  public punto: any;
  public fontWeight: any;
  public fontStyle: any;
  public textDecor: any;
  public spanTop: any;
  public spanLeft: any;
  public spanRight: any;
  public spanBottom: any;
  public layer: any;
  public height: any;
  public width: any;
  public spanLoc: any;
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
    this.spanLoc = 'Orta';
    this.span = 'Drag & Drop';
    this.tip = 'Yazi';
    this.bg = 'color';
    this.punto = 25;
    this.font = 'Arial';
    this.fontWeight = '';
    this.fontStyle = '';
    this.textDecor = '';
    this.spanTop = null;
    this.spanBottom = null;
    this.spanLeft = null;
    this.spanRight = null;
  }
}
