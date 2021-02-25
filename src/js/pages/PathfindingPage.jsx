import React, {useCallback, useEffect, useRef, useState} from "react";
import {useEffectWithNonNull} from "util/util";

import {onMousePress, onMouseRelease} from "../redux/reducers/application";
import {useDispatch} from "react-redux";
import {registerPathfindingWorker, sendMessage, unregisterWorker} from "workers/workers.js";
import GridElement from "components/GridElement";
import Button from "components/Button";

import "styles/pages/PathfindingPage.scss";

const pathfindingAlgorithms = ["aStar"];

function PathfindingPage() {

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [worker, setWorker] = useState(0);
    const [foundPath, setFoundPath] = useState(false);
    const [findingPath, setFindingPath] = useState(false);
    const [paused, setPaused] = useState(false);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState(0);

    const messageHandlersMap = {
        "onPathFindUpdate": payload => onPathFindUpdate(payload),
        "pathfindingFinished": payload => onPathFindingFinished(payload.foundPath)
    };

    useEffect(() => {
        setWorker(registerPathfindingWorker(e => messageHandlersMap[e.data.type](e.data.payload)));
        return () => unregisterWorker(worker);
    }, []);

    useEffectWithNonNull(() => sendMessage(worker, "initData", {}), [worker]);

    const onPathFindUpdate = useCallback((payload) => {
        console.log("onPathFindUpdate");
        console.log(payload.length);
        setData(payload);
    }, []);

    const renderGridElement = useCallback((id, x, y, isInClosed) => {
        return <GridElement
            key={id}
            isInClosed={isInClosed}
            id={id}
            x={x}
            y={y}
            style={{top: (y * 40), left: (x * 40)}}/>;
    }, []);

    const renderRow = (rowId, content) => {
        return <div key={rowId} className={"row"}>
            {content}
        </div>;
    };

    const onFindPathButtonPressed = useCallback(() => {
        if (foundPath) {
            return;
        }

        if (findingPath) {
            onPauseRequest();
        }
        else {
            setFindingPath(true);
            sendMessage(worker, "findPath", {algorithm: pathfindingAlgorithms[selectedAlgorithm]});
        }
    }, [worker, foundPath]);

    const onPathFindingFinished = useCallback(isFound => {
        console.log("Finished pathfinding, found path: " + isFound);
        setFindingPath(false);
        setFoundPath(isFound);
    }, []);

    const onStopButtonPressed = useCallback(() => sendMessage(worker, "stop"), [worker]);

    const renderGridElements = useCallback(() => {
        if (data === undefined) return;

        let rowCount = data.length;

        const arr = [];

        for (let i = 0; i < rowCount; i++) {
            const colCount = data[i].length;
            const rowElements = [];
            for (let j = 0; j < colCount; j++) {
                rowElements.push(renderGridElement(data[i][j].id, i, j, data[i][j].isInClosed));
            }
            arr.push(renderRow(i, rowElements));
        }
        return arr;
    }, [data]);

    const getPlayPauseIcon = useCallback(() => {
        if (!findingPath || paused) {
            return 'images/play_icon.png';
        }
        else {
            return 'images/pause_icon.png';
        }
    }, [findingPath, paused]);

    const onMouseUp = useCallback((e) => {
        e.preventDefault();
        dispatch(onMouseRelease());
    }, []);

    const onMouseDown = useCallback((e) => {
        e.preventDefault();
        dispatch(onMousePress());
    }, []);

    return <div className={"PathfindingPage"} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>
        <div className={"buttonsSection"}>
            <Button
                className={"chartButton playButton"}
                onClick={onFindPathButtonPressed}
                disabled={foundPath}>
                <img src={getPlayPauseIcon()} width={12} height={12} alt={""}/>
            </Button>

            <Button
                className={"chartButton stopButton"}
                onClick={onStopButtonPressed}
                disabled={!findingPath || paused}>
                <img src={'/images/stop_icon.png'} width={12} height={12} alt={""}/>
            </Button>
        </div>

        <div className={"grid"}>
            {renderGridElements()}
        </div>
    </div>;
}

export default PathfindingPage;