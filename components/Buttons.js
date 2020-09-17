// import React, { useState } from 'react';
// import 'material-icons/iconfont/material-icons.css';
// import './buttons.css';

// /**
//  * @name ToggleButton
//  * @extends `PrimaryButton`
//  * @description Renders an icon and a text into an `PrimaryButton`.
//  * @param {string} props.addClass Add extra class styles to overwrite default class.
//  * @param {number} props.width Width of the button: defaults to 40.
//  * @param {number} props.height Height of the button: defaults to 25.
//  * @param {string} props.color Color for the toggle: defaults to #3b73ff.
//  * @param {boolean} props.disabled Disables the toggle button.
//  * @param {function} props.onToggle onclick event function of the button: receives the state `Boolean` of the toggle as an argument.
//  * @returns {JSX.Element} A toggle button.
//  */
// export default function ToggleButton(props) {
//     const [state, setState] = useState(props.on || false);
//     const { width = 40, height = 25, color = '#3b73ff' } = props;
    
//     const size = height * 0.6, borderRadius = height * 0.5, margin = (size / 0.6 * (0.4 / 2) - 1);
    
//     const buttonStyle = {
//         borderColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C',
//         borderRadius
//     }
    
//     const spanStyle = {
//         height: size,
//         width: size,
//         marginLeft: state ? `calc(100% - ${size}px - ${margin}px)` : margin,
//         backgroundColor: props.disabled ? '#ccc' : state ? color : '#4D4F5C'
//     }
    
//     const addClass = `toggle-button ${props.addClass || ''} ${props.disabled ? 'disabled' : ''}`;
    
//     const toggle = () => {
//         if (props.disabled) return;
        
//         setState(!state);
//         props.onToggle && props.onToggle(!state);
//     }
    
//     return (
//         <PrimaryButton
//             style={buttonStyle}
//             addClass={addClass}
//             onClick={toggle}
//             width={width}
//             height={height}
//             disabled={props.disabled}
//         >
//             <span style={spanStyle}></span>
//         </PrimaryButton>
//     )
// }


// /**
//  * @name PrimaryButton
//  * @description Renders a HTML Button element
//  * @param {string} props.className The default class of the button.
//  * @param {string} props.addClass Add extra class styles to overwrite default class.
//  * @param {number} props.width Width of the button.
//  * @param {number} props.height Height of the button.
//  * @param {string} props.text Text for the button.
//  * @param {JSX.Element} props.children React Elements
//  * @param {function} props.onClick onclick event function of the button.
//  * @returns {JSX.Element} A HTML `button`
//  */
// export default function PrimaryButton(props) {
//     const unsupportedProps = [
//         'addClass', 'spinnerColor', 'spinnerColors', 'onClickIcon', 'customClick',
//         'customIcon', 'isActive', 'childHeight','component', 'preventDefaultClick',
//         'spinnerDepth', 'spinnerDuration', 'spinnerSize', 'listClass', 'iconStyle',
//     ];

//     const className = `${props.className || 'primary-button'} ${props.addClass || ''}`.trim();
//     const style = {
//         width: props.width,
//         height: props.height,
//         ...props.style
//     }

//     const newProps = { ...props };

//     for (const key in newProps) {
//         if (unsupportedProps.includes(key)) {
//             delete newProps[key];
//         }
//     }

//     return (
//         <button
//             {...newProps}
//             style={style}
//             className={className}
//         >
//             {props.children || props.text}
//         </button>
//     )
// }
