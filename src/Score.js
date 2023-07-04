export default function Score({scores}) {
    return (
        <div className="profScores">
        {scores.map((score) => {
            return (
                <div className="scores">
                    <p><b>date: </b>{score.date}</p>
                    <p><b>score: </b>{score.score}</p>
                    <hr />
                </div>
            )
        })}
        </div>
    )
}