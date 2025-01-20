const STORAGE_KEY = 'todoAppData';

export function saveToLocalStorage(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
