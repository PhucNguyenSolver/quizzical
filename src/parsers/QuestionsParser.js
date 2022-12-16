import { data } from "../components/data"

function parseQuestion(q) {
    const responses = { A: q.resA, B: q.resB, C: q.resC, D: q.resD }
    const responsesArr = [q.resA, q.resB, q.resC, q.resD]
    const correct_answer = responses[q.answer]

    return {
        category: "LSĐ",
        type: "multiple",
        difficulty: "easy",
        question: q.question,
        correct_answer: correct_answer,
        incorrect_answers: responsesArr.filter((v) => v !== correct_answer),
    }
}

export function parseQuestions(qs = data) {
    return Array.from(qs).map(parseQuestion)
}
