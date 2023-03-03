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
  public textDecoration: any;
  public spanTop: any;
  public spanLeft: any;
  public spanRight: any;
  public spanBottom: any;
  public layer: any;
  public heightD: any;
  public widthD: any;
  public spanLoc: any;
  public bgColorD: any;
  public bgUrlD: any;
  public bg: any;

  constructor(
    id: any,
    widthD: any,
    heightD: any,
    bgUrlD: any,
    layer: any,
    bgColorD: any
  ) {
    this.id = id;
    this.widthD = widthD;
    this.heightD = heightD;
    this.top = '';
    this.left = '';
    this.bgUrlD = bgUrlD;
    this.layer = layer;
    this.bgColorD = bgColorD;
    this.spanLoc = 'Orta';
    this.span = 'Drag & Drop';
    this.tip = 'Yazi';
    this.bg = 'color';
    this.punto = 25;
    this.font = 'Arial';
    this.fontWeight = '';
    this.fontStyle = '';
    this.textDecoration = '';
    this.spanTop = null;
    this.spanBottom = null;
    this.spanLeft = null;
    this.spanRight = null;
  }
}
