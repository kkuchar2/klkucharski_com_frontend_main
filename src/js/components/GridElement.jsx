import React, {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import classNames from "classnames";

function GridElement(props) {

    const [active, setActive] = useState(false);
    const [left, setLeft] = useState(true);
    const mousePressed = useSelector(state => state.mouse.pressed);
    const onMouseEnter = e => {
        e.preventDefault();

        if (mousePressed && !active) {
            setActive(true);
        }
        setLeft(false);
    };

    const onMouseLeave = (e) => {
        e.preventDefault();
        setLeft(true);
    };

    const onMouseClick = useCallback((e) => {
        e.preventDefault();
        setActive(!active);
    }, [active]);

    const getClassName = useCallback(() => {
        if (props.isInClosed) {
            return classNames('inClosed');
        }

        if (props.y === 5 && props.x === 9) {
            return classNames('begin');
        }

        if (props.y === 5 && props.x === 5) {
            return classNames('end');
        }

        if (active) {
            return classNames('active');
        }
    }, [active, props.x, props.y, props.idx, props.isInClosed]);

    return <div
        style={props.style}
        className={getClassName()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onMouseClick}>
        <div className={"text"}>{`x: ${props.x}`}</div>
        <div className={"text"}>{`y: ${props.y}`}</div>
    </div>;
}

export default GridElement;