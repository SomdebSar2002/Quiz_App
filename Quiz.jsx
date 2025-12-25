import React from 'react'
import he from 'he'
import clsx from 'clsx'
export default function Quiz() {
    const [quiz, setquiz] = React.useState([])
    const [button, setbutton] = React.useState(0)
    const [val, setval] = React.useState(0)
    React.useEffect(() => {
        async function ok() {
            let res = await fetch("https://opentdb.com/api.php?amount=5")
            let data = await res.json()
            setquiz(data.results)
        }
        ok()
    }
        , [val])
    function createAnswer() {
        let ok = quiz.map(q => ({
            question: q.question,
            correct: q.correct_answer,
            chosen: "",
            options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - .5)
        }))

        return ok
    }

    const [answer, setanswer] = React.useState([])
    React.useEffect(() => {
        if (quiz.length)
            setanswer(prev => createAnswer())
    }, [quiz])
    function handleClick() {
        if (button % 2 == 0) {
            setbutton(button + 1)

        }
        else {
            setanswer([])
            setquiz([])
            setval(val + 1)
            setbutton(button + 1)

        }
    }
    function findCorrect() {
        let count = 0
        answer.forEach(a => {
            count += (a.chosen == a.correct)
        })
        return count
    }
    return (
        <div key="oioo" className="Quiz group">
            <div className="questions">
                 <img className="blob3" src="./blob_1.png"/>
                            <img className="blob4" src="./blob_2.png"/>
                {answer.map((group, i) => {
                    return (
                        <>
                            <p>{he.decode(group.question)}</p>
                            <form key={i} id={`q${i}`} className="question">
                                {group.options.map(e => {
                                    return (<label className={clsx({
                                        'checku': (group.chosen == e) && ((button + 1) % 2),
                                        'didi': (button) % 2,
                                        'showCorrect': ((button) % 2) && (group.correct == e),
                                        'showWrong': ((button) % 2) && (group.chosen == e) && (group.chosen != group.correct) && (group.chosen != "")

                                    })}>
                                        <input disabled={(button) % 2} type="radio" name={`q-${i}`} value={e} checked={group.chosen === e}
                                            onChange={
                                                e => {
                                                    if ((button) % 2) return
                                                    setanswer(prev => prev.map((a, idx) => {
                                                        return (i == idx) ? { ...a, chosen: e.target.value } : a
                                                    }))
                                                }
                                            } />
                                        {he.decode(e)}
                                    </label>)
                                })}

                            </form>
                            <hr />
                        </>
                    )
                })}
            </div>
            <footer>
            {(button % 2===1) && <p className="score">You scored {findCorrect()}/5 correct answers</p>}
                <button className={clsx({
                "submit":true,
                "resz":button%2
            })} onClick={handleClick}>{(button % 2 == 0) ? "Check Answer" : "Play Again"}</button>
        </footer>
        </div >
    )
} 
