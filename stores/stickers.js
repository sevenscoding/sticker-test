export const useStickerStore = defineStore('stickers', {
    state: () => ({
        stickers: [
        ],
    }),
    actions: {
        addSticker(text) {
            this.stickers.push({
                id: Date.now(),
                text,
            })
        },
        removeSticker(id) {
            this.stickers = this.stickers.filter((sticker) => sticker.id !== id)
        },
        editSticker(id, newText) {
            const sticker = this.stickers.find((s) => s.id === id)
            if (sticker) {
                sticker.text = newText
            }
        },
    },
})
