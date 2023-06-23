import React from "react";

class Feedback extends React.Component {
    static defaultProps = {
        goodInitialValue: 0,
        neutralInitialValue: 0,
        badInitialValue: 0,
    }

    static propTypes = {
        // тут описуємо пропи
    }
    // state = {
    //     value: this.props.initialValue,
    // }
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

     goodIncrement = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        });
    }
     neutralIncrement = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    }
     badIncrement = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        });
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
     countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Math.round((good / total) * 100) || 0;
    };
    

    render() {
        const totalFeedback = this.countTotalFeedback();
        const totalPercentage = this.countPositiveFeedbackPercentage();
        return (
            <div className="feedback">
                <h2>Please leave feedback</h2>
                <button type="button" onClick={this.goodIncrement}>Good</button>
                <button type="button" onClick={this.neutralIncrement}>Neutral</button>
                <button type="button" onClick={this.badIncrement}>Bad</button>
                <h2>Statistics</h2>
                <span className="feedback_good">Good: {this.state.good}</span>
                <span className="feedback_neutral">Neutral: {this.state.neutral}</span>
                <span className="feedback_bad">Bad: {this.state.bad}</span>
                <span>Total: {totalFeedback}</span>
                <span>Positive feedback: {totalPercentage}</span>
            </div>
        )
    }

}

export default Feedback;