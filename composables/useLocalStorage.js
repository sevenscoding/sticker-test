export function useLocalStorage(key, initialValue = []) {
    const storedValue = localStorage.getItem(key)
    const data = ref(storedValue ? JSON.parse(storedValue) : initialValue)

    const saveToLocalStorage = () => {
        localStorage.setItem(key, JSON.stringify(data.value))
    }

    watch(data, saveToLocalStorage, { deep: true })

    return { data }
}
