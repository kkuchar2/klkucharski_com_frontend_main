import {bubbleSort, insertionSort, mergeSortRecursive, quickSort} from "workers/sorts";
import {AStarPathfinder} from "workers/pathfinders";

export const SLOWDOWN_FACTOR_MS = 1;

export const sortState = {
    pause: false,
    abort: false,
    data: []
};

export const pathFindingState = {
    pause: false,
    abort: false,
    data: [],
    found_path: false
};

export const resetState = () => {
    sortState.pause = false;
    sortState.abort = false;
};

export const sortAlgorithmMap = {
    "QuickSort": quickSort,
    "BubbleSort": bubbleSort,
    "InsertionSort": insertionSort,
    "MergeSort": mergeSortRecursive
};

export const pathfindingAlgorithmMap = {
    "aStar": AStarPathfinder
};

let previousTime = new Date().getTime();
let firstTime = true;

export const notify = (type, payload) => {
    let currentTime = new Date().getTime();

    if (currentTime - previousTime > 16 || firstTime) {
        firstTime = false;
        postMessage({type: type, payload: payload});
        previousTime = currentTime;
    }
    while (new Date().getTime() - currentTime < SLOWDOWN_FACTOR_MS) {}
};

export const notifySortDataShuffled = () => notify("shuffle", sortState.data);

export const notifySortUpdate = () => notify("sort", sortState.data);

export const notifyPathFindUpdate = () => notify("onPathFindUpdate", pathFindingState.data);

export const onSortMethodExit = () => postMessage({type: "sortFinished", payload: {"sorted": !sortState.abort}});

export const onPathfinderMethodExit = () => postMessage({type: "pathfindingFinished", payload: {"foundPath": pathFindingState.found_path && !pathFindingState.abort}});

export const getSortMethod = (algorithm) => sortAlgorithmMap[algorithm];

export const getPathfindingMethod = (algorithm) => pathfindingAlgorithmMap[algorithm];

export const shuffle = async (size, maxValue) => {
    sortState.data = new Array(size);

    for (let i = 0; i < size; i++) {
        sortState.data[i] = getRandomInt(1, maxValue);
    }
};

export const PromiseTimeout = delay => {
    return new Promise((resolve, reject) => setTimeout(resolve, delay));
};

export const CheckPause = async () => {
    await PromiseTimeout(0);
    while (sortState.pause) {
        await PromiseTimeout(0);
    }
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;