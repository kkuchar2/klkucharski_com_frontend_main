import {
    getPathfindingMethod, notifyPathFindUpdate,
    onPathfinderMethodExit,
    pathFindingState,
} from "workers/worker.utils.js";

/* -------------- Main message handler ------------------ */

self.onmessage = message => requestMap[message.data.type](message.data.payload);

/* ------------------------------------------------------ */

const requestMap = {
    "initData": e => initDataRequest(e),
    "findPath": e => onFindPathRequest(e),
};

const initDataRequest = message_data => {

    const cols = 50;
    const rows = 50;

    function Spot(id, x, y) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.isInClosed = false;
        this.isInOpen = false;
    }

    function addNeighbors(spot, data) {
        let columnCnt = data.length;
        let rowCnt = data[0].length;
        let posX = spot.x;
        let posY = spot.y;

        if (posX < columnCnt - 1) {
            spot.neighbors.push(data[posX + 1][posY]);
        }

        if (posX > 0) {
            spot.neighbors.push(data[posX - 1][posY]);
        }

        if (posY < rowCnt - 1) {
            spot.neighbors.push(data[posX][posY + 1]);
        }

        if (posY > 0) {
            spot.neighbors.push(data[posX][posY - 1]);
        }

        return spot;
    }

    let arr = [];

    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
    }

    let id = 0;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            arr[i][j] = new Spot(id, i, j);
            id++;
        }
    }

    // feed neighbors
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            addNeighbors(arr[i][j], arr);
        }
    }

    pathFindingState.data = arr;

    notifyPathFindUpdate();
};

const onFindPathRequest = message_data => {
    getPathfindingMethod(message_data.algorithm)().then(onPathfinderMethodExit);
};

const onPauseRequest = () => pathFindingState.pause = !pathFindingState.pause;
const onAbortRequest = () => pathFindingState.abort = true;