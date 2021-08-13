export const getSavedLotIds = () => {
    const savedLotIds = localStorage.getItem('saved_lots')
    ? JSON.parse(localStorage.getItem('saved_lots'))
    : [];

    return savedLotIds;
};

export const savedLotIds = (lotIdArr) => {
    if (lotIdArr.length) {
        localStorage.setItem('save_lots', JSON.stringify(lotIdArr));
    } else {
        localStorage.removeItem('saved_lots');
    }
};

export const removeLotId = (lotId) => {
    const savedLotIds = localStorage.getItem('saved_lots')
    ? JSON.parse(localStorage.getItem('saved_lots'))
    : null;

    if(!savedLotIds) {
        return false;
    }

    const updatedSavedLotIds = savedLotIds?.filter((savedLotId) => savedLotId !== lotId);
    localStorage.setItem('saved_lots', JSON.stringify(updatedSavedLotIds));

    return true;
};