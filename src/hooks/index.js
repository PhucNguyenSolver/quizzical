import { useState, useEffect } from "react"
import { DB } from "../../utils"

export function useBaseDifficulty() {
    const BASE_DIFFICULTY_KEY = "BASE_DIFFICULTY_KEY"
    const [difficulty, setDifficulty] = useState(NaN)

    useEffect(() => {
        if (DB.get(BASE_DIFFICULTY_KEY) === null) {
            DB.set(BASE_DIFFICULTY_KEY, 50)
        }
        setDifficulty(DB.get(BASE_DIFFICULTY_KEY))
    }, [])

    const onChange = (value) => {
        DB.set(BASE_DIFFICULTY_KEY, value)
        setDifficulty(DB.get(BASE_DIFFICULTY_KEY))
    }

    return [difficulty, onChange]
}
