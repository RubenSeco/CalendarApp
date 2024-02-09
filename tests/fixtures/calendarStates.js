
export const events = [
  {
    id: "1",
    start: new Date("2024-02-05 20:32:00"),
    end: new Date("2024-02-05 22:32:00"),
    title: "Cumpleaños de Ruben",
    notes: "Alguna nota",
  },

  {
    id: "2",
    start: new Date("2024-03-06 20:32:00"),
    end: new Date("2024-03-06 22:32:00"),
    title: "Cumpleaños de Melissa",
    notes: "Alguna nota de Melissa",
  },


];


export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,

};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,

};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },

}



