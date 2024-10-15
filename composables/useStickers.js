import { storeToRefs } from 'pinia'
import { useStickerStore } from '~/stores/stickers'

export function useStickers() {
    const stickerStore = useStickerStore()
    const { stickers } = storeToRefs(stickerStore)
    const editedSticker = ref(null)

    const addSticker = (text) => {
        if (text.trim()) {
            stickerStore.addSticker(text)
        }
    }

    const removeSticker = (id) => {
        console.log(id, id)
        stickerStore.removeSticker(id)
    }

    const startEditing = (sticker) => {
        editedSticker.value = { ...sticker }
    }

    const saveEdit = (sticker) => {
        stickerStore.editSticker(sticker?.id, sticker?.text)
    }

    return {
        stickers,
        editedSticker,
        addSticker,
        removeSticker,
        startEditing,
        saveEdit,
    }
}