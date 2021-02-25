import {CheckPause, notifyPathFindUpdate, pathFindingState} from "workers/worker.utils.js";

const removeFromArray = (arr, v) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == v) {
            arr.splice(i, 1);
        }
    }
};

export const AStarPathfinder = async () => {

    console.log("Started AStarPathfinder");

    // Get grid data
    let data = pathFindingState.data;
    let length = pathFindingState.data.length;

    let cols = data.length;
    let rows = data[0].length;

    console.log("Rows: " + rows);
    console.log("Cols: " + cols);

    let openSet = []; // nodes that need to be evaluated
    let closedSet = []; // nodes that were already evaluated

    let start = data[0][0];
    let end = data[cols - 1][rows - 1];

    console.log("Start:");
    console.log(start);

    console.log("End:");
    console.log(end);

    openSet.push(start);
    pathFindingState.data[0][0].isInClosed = true;

    notifyPathFindUpdate();

    while (openSet.length > 0) {

        // find lowest f
        let winner = 0;
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[winner].f) {
                winner = i;
            }
        }

        let current = openSet[winner];

        if (openSet[winner] === end) {
            console.log("DONE");
        }

        removeFromArray(openSet, current);
        closedSet.push(current);

    }
    //no solution

    for (let i = 1; i < length; i++) {

        await CheckPause();

        if (pathFindingState.abort) {
            return;
        }

        notifyPathFindUpdate();
    }

    console.log("Finished AStarPathfinder");
};