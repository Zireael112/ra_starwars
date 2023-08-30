import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 5,
    facts: ['Прообразом Чубакки стал пёс режиссёра',
    'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок']
};


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeValue: (state, action) => {
        state.value = action.payload
    }
  },
});

export const {changeValue} = dataSlice.actions

export const selectData = (state) => state.data.facts;
export const selectValue = (state) => state.data.value;

export default dataSlice.reducer;
