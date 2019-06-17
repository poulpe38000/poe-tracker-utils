function findText(text, rooms) {
    return text === ''
        || rooms
            .some((room) => {
                return room.name.toLowerCase().search(text.toLowerCase()) !== -1
            });
}

export function filterIncursions(rooms, text) {
    return Object
        .keys(rooms)
        .reduce((result, roomsKey) => {
            if (findText(text, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}