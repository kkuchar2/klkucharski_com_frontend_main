import React, {Component} from 'react';
import Chart from "js/components/chart/Chart.jsx";
import SubmitButton from "js/components/buttons/SubmitButton.jsx";
import SelectControl from "js/components/select/SelectControl.jsx";
import Spinner from "js/components/spinner/Spinner.jsx";
import Input from "js/components/input/Input.jsx";

import "js/pages/SortPage.scss"

class SortPage extends Component {

    state = {
        windowWidth: 0,
        windowHeight: 0,
        data: [],
        sorted: false,
        sorting: false,
        paused: false,
        dirty: false,
        sampleCount: 200,
        selectedAlgorithm: 0
    };

    messageHandlersMap = {
        "sort": payload => this.onSortDataReceived(payload),
        "shuffle": payload => this.onShuffleDataReceived(payload),
        "sortFinished": payload => this.onSortFinished(payload.sorted)
    };

    sortingAlgorithms = ["MergeSort", "BubbleSort", "InsertionSort", "QuickSort"];

    maxValue = 1000;

    constructor(props) {
        super(props);
        this.worker = new Worker('./../workers/sort.worker', {type: 'module'});
        this.worker.onmessage = this.onMessageReceived;
    }

    updateDimensions = () => {
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
        let intervalId = setInterval(this.refreshState, 16);
        this.setState({ intervalId: intervalId });
        console.log("Setting interval: " + intervalId);
        this.onShuffleRequest(this.state.sampleCount);
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
        if (this.worker !== undefined) {
            this.worker.terminate();
        }
        clearInterval(this.state.intervalId);
        console.log("Clearing interval: " + this.state.intervalId);
    }

    onMessageReceived = e => {
        this.messageHandlersMap[e.data.type](e.data.payload);
    }

    onShuffleDataReceived = data => {
        this.setState({data: data, sorted: false});
    }

    onSortDataReceived = data => {
        this.state.data = data;
        this.state.dirty = true;
    }

    onSortFinished = isSorted => {
        this.setState({sorting: false, sorted: isSorted});
    }

    onSortButtonPressed = () => {
        if (this.state.sorted) {
            return;
        }

        if (this.state.sorting) {
            this.onPauseRequest()
        }
        else {
            this.setState({sorting: true});
            this.sendMessage("sort", {algorithm_type: this.sortingAlgorithms[this.state.selectedAlgorithm]});
        }
    }

    onStopButtonPressed = () => {
        console.log("Requesting stop")
        this.sendMessage("stop");
    }

    onPauseRequest = () => {
        this.setState({paused: !this.state.paused});
        this.sendMessage("pause");
    }

    onShuffleRequest = sampleCount => {
        this.setState({sorting: false});
        this.sendMessage("shuffle", {sampleCount : sampleCount, maxValue: this.maxValue});
    }

    sendMessage = (type, payload = []) => {
        this.worker.postMessage({type: type, payload : payload});
    }

    refreshState = () => {
        if (this.state.dirty) {
            this.state.dirty = false;
            this.forceUpdate();
        }
    }

    onSelectedAlgorithmChange = option => {
        this.setState({selectedAlgorithm: option});
    }

    onSampleCountInputChange = e => {
        let v = e.target.value;
        let targetValue = 1;
        if (/^([1-9][0-9]{0,3}|10000)$/.test(v)) {
            targetValue = parseInt(v);
            this.onShuffleRequest(targetValue);
        }
        this.setState({sampleCount: v});
    };

    getSortButtonClassName = () => {
        return ["sortButton chartButton"];
    };

    getSpinnerClassName = () => {
        return ["startAnimate"];
    };

    renderSpinner = () => {
        if (this.state.sorting && !this.state.paused) {
            return <Spinner
                className={this.getSpinnerClassName()}>
            </Spinner>;
        }
    }

    renderStopButton = () => {
        if (this.state.sorting && !this.state.paused) {
            return <SubmitButton
                className={"chartButton"}
                onClick={this.onStopButtonPressed}
                disabled={false}
                text={"Abort"}>
                <img src={'/images/stop_icon.png'} width={12} height={12} alt={""}/>
            </SubmitButton>;
        }
    }

    getPlayPauseIcon = () => {
        if (!this.state.sorting || this.state.paused) {
            return 'images/play_icon.png';
        }
        else {
            return 'images/pause_icon.png';
        }
    }

    getSortText = () => {
        if (!this.state.paused && this.state.sorting) {
            return 'Pause';
        }
        else if (this.state.paused && this.state.sorting) {
            return 'Resume';
        }
        else if (!this.state.sorting) {
            return 'Sort';
        }
    }

    render() {
        return (
            <div className={"pageComponents2"}>

                <div className={"actions"}>

                    <div className={"methodSection"}>
                        <SelectControl
                            className={"sorting-algorithm-select"}
                            options={this.sortingAlgorithms}
                            value={this.state.selectedAlgorithm}
                            disabled={this.state.sorting}
                            onChange={this.onSelectedAlgorithmChange}>
                        </SelectControl>
                    </div>

                    <div className={"sampleCountSection"}>
                        <div className={"titleContainer"}>
                            <p className={"title"}>Samples:</p>
                        </div>

                        <Input
                            id="fname"
                            name="fname"
                            disabled={true}
                            value={this.state.sampleCount}
                            active={this.state.sorting}
                            onChange={this.onSampleCountInputChange}/>
                    </div>


                    <div className={"buttonsSection"}>
                        <SubmitButton
                            className={"chartButton"}
                            onClick={() => this.onShuffleRequest(this.state.sampleCount)}
                            disabled={this.state.sorting}
                            text={"Shuffle"}>
                        </SubmitButton>

                        <SubmitButton
                            className={"chartButton"}
                            onClick={this.onSortButtonPressed}
                            disabled={this.state.sorted}
                            text={this.getSortText()}>
                            <img src={this.getPlayPauseIcon()} width={12} height={12} alt={""}/>
                        </SubmitButton>

                        {this.renderStopButton()}
                        {this.renderSpinner()}
                    </div>

                </div>

                <Chart
                    samples={this.state.sampleCount}
                    maxValue={this.maxValue}
                    data={this.state.data}>
                </Chart>

            </div>);
    }
}

export default SortPage;