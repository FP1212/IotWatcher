import React, { useEffect, forwardRef } from "react";
import { IGridItem } from "../../types/IGridLayout";

const GridItem = forwardRef<HTMLDivElement,IGridItem>(
  (
    {
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      children,
      ...props
    }: IGridItem,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{ width: "100%", height: "100%", ...style }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default GridItem;
