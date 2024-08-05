import React, { useState } from 'react';
import styles from './BoxGenerator.module.css';

const Generator = (props) => {

    const [backgroundColor, setBackgroundColor] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const boxStyle = {
        backgroundColor,
        margin: '50px auto 10px 10px',
        display: 'inline-block'
    };

    const createBox = (e) => {
        e.preventDefault();
        let newBox = document.createElement('div');
        newBox.style.backgroundColor = color;
        newBox.style.height = size + 'px';
        newBox.style.width = size + 'px';
        newBox.style.margin = boxStyle.margin;
        newBox.style.display = boxStyle.display;
        let boxLine = document.getElementById('boxes');
        boxLine.appendChild(newBox);
        setColor('');
        setSize('');
    }

    return (
        <div>
            <form onSubmit={createBox} className={styles.formStyle}>
                <label className={styles.labelStyle}>Color</label>
                <input 
                    type='text' 
                    value={color} 
                    onChange={(e) => {
                        setColor(e.target.value);
                    }} 
                    className={styles.inputStyle}
                />
                <label className={styles.labelStyle}>Size (pixels)</label>
                <input 
                    type='number'
                    value={size}
                    onChange={(e) => {
                        setSize(e.target.value);
                    }}
                    className={styles.inputStyle}
                />
                <button className={styles.buttonStyle}>Add</button>
                <div id='boxes'>
                </div>
            </form>
        </div>
    );
}

export default Generator;
