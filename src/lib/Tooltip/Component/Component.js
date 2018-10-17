import React, { Component } from 'react';

import TextBox from './TextBox/TextBox';
import Arrow from './Arrow/Arrow';

import './Component.css';
import './Animation.css';

class Tooltip extends Component {
    state = {
        hoverArrow: false,
        mount: this.props.show
    }

    hoverArrow = (boolean) => {
        this.setState({ hoverArrow: boolean })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.show && !this.props.show) {
            setTimeout(
                () => this.setState({ mount: false }),
                this.props.delayTime
            );
        } else if (!prevProps.show && this.props.show) {
            this.setState({ mount: true });
        }
    }

    render() {

        this.props = {
            ...this.props,
            hoverBackground: this.props.hoverBackground || '#ececec',
            hoverColor: this.props.hoverColor || 'black',
            backgroundColor: this.props.backgroundColor || 'white',
            textBoxWidth: this.props.textBoxWidth || '150px',
            padding: this.props.padding || '15px 20px',
            borderRadius: this.props.borderRadius || '5px',
            moveDown: this.props.moveDown || '0px'
        }

        const {
            textAlign = 'left',
            fontFamily = 'inherit',
            fontWeight = 'bold',
            fontSize = 'inherit',
            color = 'inherit',
            arrow: position,
            align,
            moveDown,
            textBoxWidth
        } = this.props;

        function is(pos1, pos2, pos3) {
            return this.position === pos1
                || this.position === pos2
                || this.position === pos3;
        }

        function side(pos) {
            if (pos === 'left' || pos === 'right')
                return this.is(`${pos}Center`, `${pos}Top`, `${pos}Bottom`);
            return this.is(`${pos}Center`, `${pos}Left`, `${pos}Right`);
        }

        this.props.align = {
            is,
            position: align
        }

        this.props.arrow = {
            is,
            side,
            position
        };

        const calcVpos = (units) => {
            return moveDown ? `calc(${units} + ${moveDown})` : `${units}`;
        }

        const arrange = (units, cssClass, left, height, width) => {
            tooltipStyle = { left, height, width, top: calcVpos(units) };
            classes.push(cssClass)
        }

        let classes = ['tpContainer'];

        let tooltipStyle = {};
        let { arrow, align: algn } = this.props;

        if (arrow.side('top')) {
            arrange('100%', 'tpArrowTop', '0px', '', '100%');
        } else if (arrow.side('bottom')) {
            arrange('-21px', 'tpArrowBottom', '0px', '', '100%');
        } else if (arrow.side('left')) {
            arrange('0px', 'tpArrowLeft', '100%', '100%', '');
        } else {
            arrange('0px', 'tpArrowRight',
                `-${textBoxWidth}`, '100%', textBoxWidth);
        }

        let onAxis = {
            y: arrow.side('top') || arrow.side('bottom'),
            x: arrow.side('left') || arrow.side('right')
        }

        switch (algn.position) {
            case 'left':
                if (onAxis.y) classes.push('tpArrowLeft');
                break;
            case 'right':
                if (onAxis.y) classes.push('tpArrowRight');
                break;
            case 'center':
                if (onAxis.x) classes.push('tpAlignCenter');
                break;
            case 'bottom':
                if (onAxis.x) classes.push('tpAlignBottom');
                break;
            default:
                break;
        }

        let animate = 'example'

        tooltipStyle = {
            ...tooltipStyle,
            color,
            fontSize,
            textAlign,
            fontFamily,
            fontWeight,
            animation: this.props.show ? `${animate} 0.6s` : `${animate}-out 0.6s`,
        }

        let tpComp = this.state.mount ?
            <div className={classes.join(' ')}
                style={tooltipStyle}>
                <Arrow
                    {...this.props}
                    isHovered={this.state.hoverArrow}
                />
                <TextBox
                    {...this.props}
                    hoverArrow={this.hoverArrow}
                />
            </div> : null;

        return tpComp;
    }
}

export default Tooltip;