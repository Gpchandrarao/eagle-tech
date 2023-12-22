import { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import RaceTrack from "../RaceTrack";

import "./index.css";

class TakingparticipantEntries extends Component {
  state = {
    name: "",
    speed: "",
    startTime: "",
    participantsData: [],
    isGameStart: true,
    showResult: true,
  };

  onChangeInputName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeInputSpeed = (e) => {
    this.setState({ speed: e.target.value });
  };

  onChangeInputStartTme = (e) => {
    this.setState({ startTime: e.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { name, speed, startTime } = this.state;
    const newParticipant = {
      id: uuidv4(),
      name,
      speed,
      startTime,
    };
    this.setState((prevState) => ({
      participantsData: [...prevState.participantsData, newParticipant],
      name: "",
      speed: "",
      startTime: "",
    }));
  };

  onClickRaceStart = () => {
    this.setState({ isGameStart: false, isRaceStart: true });
  };

  render() {
    const { name, speed, startTime, participantsData, isGameStart } =
      this.state;
    return (
      <>
        {isGameStart ? (
          <div className="participant-container">
            <div className="rigth-side">
              <h1>RUNNER DETAILS</h1>
              <p className="participants-limit">
                *You can add max 10 participants
              </p>
              <form onSubmit={this.onSubmitForm} className="participants-form">
                <div className="form-input-container">
                  <label htmlFor="name" className="lable">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Enter participant name..."
                    type="text"
                    className="input"
                    onChange={this.onChangeInputName}
                    value={name}
                  />
                </div>
                <div className="form-input-container">
                  <label htmlFor="speed" className="lable">
                    Speed
                  </label>
                  <input
                    id="speed"
                    placeholder="Enter speed..."
                    type="speed"
                    className="input"
                    onChange={this.onChangeInputSpeed}
                    value={speed}
                  />
                </div>
                <div className="form-input-container">
                  <label htmlFor="time" className="lable">
                    Start Time
                  </label>
                  <input
                    id="StartTime"
                    placeholder="Enter Starting Time..."
                    type="time"
                    className="time"
                    onChange={this.onChangeInputStartTme}
                    value={startTime}
                  />
                </div>
                <button type="submit" className="add-button">
                  <FiPlus className="plus" />
                  ADD RUNNER
                </button>
              </form>
            </div>

            {/* left-side */}
            <div className="left-side">
              <div className="left-side-detiles">
                <h1 className="participant-list-heaing">
                  LIST OF PARTICIPANTS
                </h1>
                <div className="list-header">
                  <p>Name</p>
                  <p>Speed</p>
                  <p>Start Time</p>
                  <p>End Time</p>
                </div>
                <div>
                  {participantsData.map((each) => {
                    return (
                      <ul className="participantsDataMap" key={each.id}>
                        <li className="participants-data-name">{each.name}</li>
                        <li className="participants-data-speed">
                          {each.speed} KM/H
                        </li>
                        <li className="participants-data-start">
                          {each.startTime}
                        </li>
                        <li className="participants-data-end">-</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <hr />
              <button
                type="button"
                className="start-button"
                onClick={this.onClickRaceStart}
              >
                Start Race <FaArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <RaceTrack data={participantsData} />
          </div>
        )}
      </>
    );
  }
}

export default TakingparticipantEntries;
