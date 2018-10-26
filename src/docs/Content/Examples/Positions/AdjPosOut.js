import React from 'react';
import Tooltip from '../../../../lib';

const AdjustmentOuter = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Outer positions</strong></h3>
            <div
                style={{
                    cursor: 'pointer',
                    border: '2px solid #4b4b4b',
                    background: 'rgba(137, 27, 211, 0.4)',
                    width: '150px',
                    height: '100px',
                    position: 'relative',
                    marginTop: '80px',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <h3>Target element</h3>
                <Tooltip
                    show={true}
                    arrow='rightCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveLeft='40px'
                    static
                >
                    <span>moveLeft<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='topCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveDown='40px'
                    static
                >
                    <span>moveDown<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='leftCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveRight='40px'
                    static
                >
                    <span>moveRight<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='bottomCenter'
                    align='center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveUp='40px'
                    static
                >
                    <span>moveUp<br />40px</span>
                </Tooltip>
            </div>
        </>
    );
};

export default AdjustmentOuter;