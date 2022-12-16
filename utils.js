export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

export const DB = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

    get: (key) => {
        try {
            const result = localStorage.getItem(key)
            return result !== null ? JSON.parse(result) : null
        } catch (e) {
            console.warn(e)
            return null
        }
    },

    remove: (key) => localStorage.removeItem(key),

    clear: () => localStorage.clear(),
}
