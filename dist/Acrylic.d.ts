import React from 'react';
declare type Props = {
    blur?: number;
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
    left?: string | number;
    top?: string | number;
    width?: string | number;
    height?: string | number;
    colorOverlay?: string;
    opacity?: number;
    borderRadius?: string | number;
    boxShadow?: string;
    className?: string;
};
declare class Acrylic extends React.Component<Props, {}> {
    static defaultProps: {
        blur: number;
        position: string;
        left: number;
        top: number;
        width: number;
        height: number;
        colorOverlay: string;
        opacity: number;
        borderRadius: number;
        boxShadow: string;
        className: string;
    };
    private contentEl;
    private blurEl;
    private canvas;
    constructor(props: Props);
    showHideElement: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Acrylic;
