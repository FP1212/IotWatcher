import React from "react"
import CustomResponsiveGridLayout from "../components/CustomResponsiveGridLayout"
import ButtonAddComponent from "../components/dashboard/ButtonAdd"

export default function Dashboard() {
    return (
        <React.Fragment>
            <ButtonAddComponent tab="0" />
            <CustomResponsiveGridLayout>
                <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, }}>
                    a
                </div>
                <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, }}>
                    b
                </div>
                <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
                    c
                </div>
            </CustomResponsiveGridLayout>
        </React.Fragment>
    )
}