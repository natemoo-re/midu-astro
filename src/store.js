import { signal } from '@preact/signals'

export const favorites = signal([]);
export const add = (name) => {
    favorites.value = [...favorites.value, name];
}
export const remove = (name) => {
    favorites.value = favorites.value.filter(n => n !== name);
}
