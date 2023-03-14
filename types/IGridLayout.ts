export interface IDataGridItem {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IGridItem {
  key: string;
  children: any;
  "data-grid": IDataGridItem;
  style?: any;
  className?: any;
  onMouseDown?: any;
  onMouseUp?: any;
  onTouchEnd?: any;
}
